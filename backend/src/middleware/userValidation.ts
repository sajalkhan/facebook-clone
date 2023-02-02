import joi, { ValidationResult } from 'joi';
import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../helpers/errorHandler';

const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/;

interface UserInfo {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

const validateUserInfoSchema = joi.object<UserInfo>({
  first_name: joi.string().min(3).max(30).required(),
  last_name: joi.string().min(3).max(30).required(),
  password: joi.string().min(6).max(40).required(),
  email: joi.string().pattern(emailRegex).required(),
});

export const validateUserInfo = (property: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result: ValidationResult<UserInfo> = validateUserInfoSchema.validate(req[property], { allowUnknown: true });
    const valid = result.error == null;

    if (valid) {
      next();
    } else {
      const errorMessage = result.error.details[0].message;
      if (errorMessage.includes('email')) {
        next(new ErrorHandler('Please enter a valid email address', 400).message);
      } else {
        next(new ErrorHandler(errorMessage.replace(/\"/g, ''), 400).message);
      }
    }
  };
};
