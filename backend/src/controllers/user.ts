import bcrypt from 'bcrypt';
import User from '../model/user';
import ErrorHandler from '../helpers/errorHandler';
import { Request, Response, NextFunction } from 'express';
import { generateToken } from '../helpers/token';
import { sendVerificationEmail } from '../helpers/mailer';

export const home = (_req: Request, res: Response) => {
  res.send('welcome from user home');
};

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
