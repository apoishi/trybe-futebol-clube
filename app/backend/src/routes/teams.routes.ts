import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/teams.controller';

export default class TeamsRoutes {
  public route: Router;
  private _teamsController: TeamsController;

  constructor(
    userController = new TeamsController(),
  ) {
    this.route = Router();
    this._teamsController = userController;

    this.route.get(
      '/',
      (req: Request, res: Response) => this._teamsController.findAll(req, res),
    );

    this.route.get(
      '/:id',
      (req: Request, res: Response) => this._teamsController.findOne(req, res),
    );
  }
}
