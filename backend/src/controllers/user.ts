import bcrypt from 'bcrypt';
import User from '../model/user';
import { Request, Response, NextFunction } from 'express';
import { ErrorHandler, catchAsyncError } from '../middleware';

export const home = (_req: Request, res: Response) => {
  res.send('welcome from user home');
};

export const register = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
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

    res.status(200).json({
      success: true,
      message: 'Account register successfully',
      user,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
});
