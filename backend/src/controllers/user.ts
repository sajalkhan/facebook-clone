import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import HttpError from '../helpers/errorHandler';
import { generateToken, generateCode, handleError, sendVerificationEmail, sendResetCode } from '../helpers';

import User from '../model/user';
import Code from '../model/code';

//* ------------------Register user------------------------- //
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
//* ------------------Register user------------------------- //

//* --------------------Login User------------------------- //
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
//* --------------------Login User------------------------- //

//* ------------------Active Account------------------------ //
export const activateAccount = async (req, res: Response) => {
  const { token } = req.body;
  const validUser = req.user.id;

  const secret: string = process.env.TOKEN_SECRET || '3xgDmbD8WC';

  try {
    const user = jwt.verify(token, secret) as JwtPayload;
    const check = await User.findById(user.id);

    if (validUser !== user.id) {
      throw new HttpError("You don't have the authorization to complete this operation.", 404);
    }

    if (!check) {
      throw new HttpError('User not found', 404);
    }

    if (check.verified) {
      throw new HttpError('This email is already activated.', 400);
    }

    await User.findByIdAndUpdate(user.id, {
      verified: true
    });

    res.status(200).json({
      message: 'Account has been activated successfully.'
    });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return handleError(new HttpError('Invalid token.', 400), res);
    }
    if (error instanceof HttpError) {
      return handleError(error, res);
    }
    return handleError(new HttpError('An unexpected error has occurred.', 500), res);
  }
};
//* ------------------Active Account------------------------ //

//* ------------------Send Verification------------------------ //
export const sendVerification = async (req, res: Response) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (user.verified) {
      throw new HttpError('This account is already activated.', 400);
    }

    const emailVerificationToken = generateToken({ id: user._id.toString() }, '30m');
    const verificationURL = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, verificationURL);

    res.status(200).json({
      message: 'Email verification link has been sent to your email.'
    });
  } catch (error: any) {
    handleError(error, res);
  }
};
//* ------------------Send Verification------------------------ //

//* -------------------------Find User------------------------ //
export const findUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select('-password');

    if (!user) {
      throw new HttpError('Account does not exists.', 400);
    }

    res.status(200).json({
      email: user.email,
      picture: user.picture,
      message: 'User found successfully!'
    });
  } catch (error: any) {
    handleError(error, res);
  }
};
//* -------------------------Find User------------------------ //

//* ---------------Send Reset Password Code------------------- //
export const sendResetPasswordCode = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select('-password');
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    await Code.findOneAndDelete({ user: user._id });
    const code = generateCode(5);
    const resetCode = new Code({
      code,
      user: user._id
    });

    await resetCode.save();
    sendResetCode(user.email, user.first_name, code);

    res.status(200).json({
      message: 'Email reset code has been sent to your email successfully!'
    });
  } catch (error: any) {
    handleError(error, res);
  }
};
//* ---------------Send Reset Password Code------------------- //

//* ------------------Validate Reset Code--------------------- //
export const validateResetCode = async (req: Request, res: Response) => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new HttpError('User not found.', 404);

    const resetCode = await Code.findOne({ user: user._id });
    if (!resetCode || resetCode.code !== code) {
      throw new HttpError('Verification code is wrong.', 400);
    }

    res.status(200).json({ message: 'ok' });
  } catch (error: any) {
    handleError(error, res);
  }
};
//* ------------------Validate Reset Code--------------------- //

//* ---------------------Change Password---------------------- //
export const changePassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    res.status(200).json({ message: 'ok' });
  } catch (error: any) {
    handleError(error, res);
  }
};
//* ---------------------Change Password---------------------- //
