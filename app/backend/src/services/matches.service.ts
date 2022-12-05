import IMatch from '../interfaces/IMatch';
import Matches from '../database/models/matches.model';
import Teams from '../database/models/teams.model';

export default class MatchesService {
  private _matchModel = Matches;

  public async findAll(): Promise<IMatch[]> {
    const result = await this._matchModel.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return result as unknown as IMatch[];
  }

  public async findInProgress(inProgress: string): Promise<IMatch[]> {
    if (inProgress === 'true') {
      return await this._matchModel
        .findAll({ include: [
          { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
        where: { inProgress: true } }) as unknown as IMatch[];
    }
    return await this._matchModel
      .findAll({ include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
      where: { inProgress: false } }) as unknown as IMatch[];
  }

  public async create(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const result = await this._matchModel
      .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
    return result;
  }
}
