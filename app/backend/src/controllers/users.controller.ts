import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users.service';
import HttpException from '../utils/http.exception';

export default class UserController {
  constructor(private _userService = new UserService()) { }

  public async login(req: Request, res: Response): Promise<void | unknown> {
    const { email, password } = req.body;

    const token = await this._userService.login(email, password);
    if (token === null) {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Incorrect email or password' });
    }
    res.status(StatusCodes.OK).json({ token });
  }

  public async loginValidation(req: Request, res: Response): Promise<void | unknown> {
    const { authorization } = req.headers;

    if (authorization) {
      const role = await this._userService.tokenValidation(authorization);
      return res.status(StatusCodes.OK).json({ role });
    }
    throw new HttpException(401, 'UNAUTHORIZED', 'Token must be a valid token');
  }
}
