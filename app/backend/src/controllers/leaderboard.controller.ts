import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HomeLeaderboardService from '../services/home.leaderboard.service';

export default class LeaderboardController {
  constructor(
    private _homeLeaderboardService = new HomeLeaderboardService(),
  ) { }

  public async getHomeLeaderboard(req: Request, res: Response) {
    const homeLeaderboard = await this._homeLeaderboardService.getHomeLeaderboard();
    res.status(StatusCodes.OK).json(homeLeaderboard);
  }
}
