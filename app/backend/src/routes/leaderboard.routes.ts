import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

export default class LeaderboardRoutes {
  public route: Router;

  constructor(
    private _leaderboardController = new LeaderboardController(),
  ) {
    this.route = Router();

    this.route.get('/home', (req: Request, res: Response) => this._leaderboardController
      .getHomeLeaderboard(req, res));
  }
}
