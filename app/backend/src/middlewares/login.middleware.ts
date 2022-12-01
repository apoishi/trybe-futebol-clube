import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersModel from '../database/models/users.model';

export default class LoginMiddleware {
  constructor(private _userModel = UsersModel) { }

  public validation = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'All fields must be filled' });
    }

    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'All fields must be filled' });
    }

    next();
  };
}
