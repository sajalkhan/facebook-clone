import joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../middleware';

const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/;

export const schema = joi.object({
  first_name: joi.string().min(3).max(30).required(),
  last_name: joi.string().min(3).max(30).required(),
  password: joi.string().min(6).max(40).required(),
  email: joi.string().pattern(emailRegex).required(),
});

export const validateUserInfo = (property: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property], { allowUnknown: true });
    const valid = error == null;

    if (valid) next();
    else {
      const errorMsg = error.details[0].message;
      return errorMsg.match(/email/g)
        ? next(new ErrorHandler('Please enter a valid email address', 400))
        : next(new ErrorHandler(errorMsg.replace(/\"/g, ''), 400));
    }
  };
};
