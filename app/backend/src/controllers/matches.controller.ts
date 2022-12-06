import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  constructor(
    private _matchesService = new MatchesService(),
    private _usersService = new UsersService(),
  ) { }

  public async findAll(req: Request, res: Response): Promise<void> {
    const { inProgress } = req.query;

    let result;
    if (!inProgress) {
      result = await this._matchesService.findAll();
    } else {
      result = await this._matchesService.findInProgress(inProgress as string);
    }
    res.status(StatusCodes.OK).json(result);
  }

  public async create(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token must be a valid token' });
    }
    await this._usersService.tokenValidation(authorization);

    const findTeams = await this._matchesService.findTeams(homeTeam, awayTeam);
    if (!findTeams) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'There is no team with such id!' });
    }

    if (homeTeam === awayTeam) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const result = await this._matchesService
      .create(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);
    return res.status(StatusCodes.CREATED).json(result);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._matchesService.update(homeTeamGoals, awayTeamGoals, Number(id));
    res.status(StatusCodes.OK).json({ message: 'Match updated' });
  }

  public async updateInProgress(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this._matchesService.updateInProgress(Number(id));
    res.status(StatusCodes.OK).json({ message: 'Finished' });
  }
}
