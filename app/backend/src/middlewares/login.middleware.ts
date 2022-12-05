import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/user.service';
import UsersModel from '../database/models/users.model';

export default class LoginMiddleware {
  constructor(
    private _userModel = UsersModel,
    private _userService = new UsersService(),
  ) { }

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

  public tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    const userRole = await this._userService.findRole(authorization as string);
    if (!userRole) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    }
    next();
  };
}
