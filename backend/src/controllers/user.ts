import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../model/user';
import { generateToken } from '../helpers/token';
import { Request, Response } from 'express';
import { sendVerificationEmail } from '../helpers/mailer';
import HttpError, { handleError } from '../helpers/errorHandler';

export const register = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, bYear, bMonth, bDay, gender } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new HttpError('This email address already exists, try with a different email address', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const username = first_name + last_name;

    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      username,
      bYear,
      bMonth,
      bDay,
      gender
    });

    const emailVerificationToken = generateToken({ id: user._id.toString() }, '30m');
    const verificationURL = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, verificationURL);

    const token = generateToken({ id: user._id.toString() }, '7d');
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: 'Register Success! Please activate your email to start.'
    });
  } catch (error: any) {
    handleError(error, res);
  }
};

export const activateAccount = async (req: Request, res: Response) => {
  const { token } = req.body;
  const secret: string = process.env.TOKEN_SECRET || '3xgDmbD8WC';

  try {
    const user = jwt.verify(token, secret) as JwtPayload;
    const check = await User.findById(user.id);

    if (!check) {
      throw new HttpError('User not found', 404);
    }

    if (check.verified === true) {
      throw new HttpError('This email is already activated.', 400);
    }

    await User.findByIdAndUpdate(user.id, {
      verified: true
    });
    return res.status(200).json({
      message: 'Account has been activated successfully.'
    });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new HttpError('Invalid token.', 400);
    }
    if (error instanceof HttpError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({
      message: 'An unexpected error has occurred.'
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new HttpError('Email not found', 400);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new HttpError('Invalid password', 400);
    }

    const token = generateToken({ id: user._id.toString() }, '7d');
    res.json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
      verified: user.verified,
      message: 'Login success'
    });
  } catch (error: any) {
    handleError(error, res);
  }
};
