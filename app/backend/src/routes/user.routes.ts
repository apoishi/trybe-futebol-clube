import { Router, Request, Response } from 'express';
import UserController from '../controllers/user.controller';
import LoginMiddleware from '../middlewares/login.middleware';

export default class UserRoutes {
  public route: Router;
  private _userController: UserController;
  private _loginMiddleware: LoginMiddleware;

  constructor(
    userController = new UserController(),
    loginMiddleware = new LoginMiddleware(),
  ) {
    this.route = Router();
    this._userController = userController;
    this._loginMiddleware = loginMiddleware;

    this.route.post(
      '/',
      this._loginMiddleware.validation,
      (req: Request, res: Response) => this._userController.login(req, res),
    );

    this.route.get(
      '/validate',
      (req: Request, res: Response) => this._userController.findRole(req, res),
    );
  }
}
