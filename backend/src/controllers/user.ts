import bcrypt from 'bcrypt';
import User from '../model/user';
import { Request, Response, NextFunction } from 'express';
import { validateEmail, validateLength } from '../helpers/validation';
import { ErrorHandler, catchAsyncError } from '../middleware';

export const home = (_req: Request, res: Response) => {
  res.send('welcome from user home');
};

export const register = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { first_name, last_name, email, password, username, bYear, bMonth, bDay, gender } = req.body;

    if (!validateEmail(email)) return next(new ErrorHandler('invalid email address', 400));

    const check = await User.findOne({ email });
    if (check) {
      return next(new ErrorHandler('This email address already exists,try with a different email address', 400));
    }

    if (!validateLength(first_name, 3, 30)) {
      return next(new ErrorHandler('first name must between 3 and 30 characters.', 400));
    }

    if (!validateLength(last_name, 3, 30)) {
      return next(new ErrorHandler('last name must between 3 and 30 characters.', 400));
    }

    if (!validateLength(password, 6, 40)) {
      return next(new ErrorHandler('password must be at-least 6 characters.', 400));
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

    res.status(200).json({
      success: true,
      message: 'Account register successfully',
      user,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
});
