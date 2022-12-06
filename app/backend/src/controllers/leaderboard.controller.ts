import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HomeLeaderboardService from '../services/home.leaderboard.service';
import AwayLeaderboardService from '../services/away.leaderboard.service';

export default class LeaderboardController {
  constructor(
    private _homeLeaderboardService = new HomeLeaderboardService(),
    private _awayLeaderboardService = new AwayLeaderboardService(),
  ) { }

  public async getHomeLeaderboard(req: Request, res: Response) {
    const homeLeaderboard = await this._homeLeaderboardService.getHomeLeaderboard();
    res.status(StatusCodes.OK).json(homeLeaderboard);
  }

  public async getAwayLeaderboard(req: Request, res: Response) {
    const awayLeaderboard = await this._awayLeaderboardService.getAwayLeaderboard();
    res.status(StatusCodes.OK).json(awayLeaderboard);
  }
}
