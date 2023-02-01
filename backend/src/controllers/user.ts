import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../model/user';
import ErrorHandler from '../helpers/errorHandler';
import { Request, Response, NextFunction } from 'express';
import { generateToken } from '../helpers/token';
import { sendVerificationEmail } from '../helpers/mailer';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { first_name, last_name, email, password, username, bYear, bMonth, bDay, gender } = req.body;

    const check = await User.findOne({ email });
    if (check) {
      return next(new ErrorHandler('This email address already exists,try with a different email address', 400));
    }

    const hash_Password = await bcrypt.hash(password, 12);

    const user = await new User({
      first_name,
      last_name,
      email,
      password: hash_Password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    const emailVerificationToken = generateToken({ id: user._id.toString() }, '30m');
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);

    const token = generateToken({ id: user._id.toString() }, '7d');
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: 'Register Success ! please activate your email to start',
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const activateAccount = async (req: Request, res: Response) => {
  const { token } = req.body;
  const secret: string = process.env.TOKEN_SECRET || '3xgDmbD8WC';

  try {
    const user = jwt.verify(token, secret) as JwtPayload;
    const check = await User.findById(user.id);

    if (!check) {
      throw new Error('User not found');
    }

    if (check.verified === true) {
      return res.status(400).json({ message: 'This email is already activated.' });
    }

    await User.findByIdAndUpdate(user.id, { verified: true });
    return res.status(200).json({ message: 'Account has been activated successfully.' });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) return res.status(400).json({ message: 'Invalid token.' });
    return res.status(500).json({ message: 'An unexpected error has occurred.' });
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler('Email not found', 400));
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return next(new ErrorHandler('Invalid password', 400));
    }

    const token = generateToken({ id: user._id.toString() }, '7d');
    return res.json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
      verified: user.verified,
      message: 'Login success',
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
