import IMatch from '../interfaces/IMatch';
import Matches from '../database/models/match.model';
import Team from '../database/models/team.model';

export default class MatchesService {
  private _matchModel = Matches;
  private _teamModel = Team;

  public async findAll(): Promise<IMatch[]> {
    const result = await this._matchModel.findAll({
      include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return result as unknown as IMatch[];
  }

  public async findInProgress(inProgress: string): Promise<IMatch[]> {
    if (inProgress === 'true') {
      return await this._matchModel
        .findAll({ include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
        where: { inProgress: true } }) as unknown as IMatch[];
    }
    return await this._matchModel
      .findAll({ include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
      where: { inProgress: false } }) as unknown as IMatch[];
  }

  public async findTeams(homeTeam: number, awayTeam: number) {
    const foundHomeTeam = await this._teamModel.findByPk(homeTeam);
    const foundAwayTeam = await this._teamModel.findByPk(awayTeam);
    if (!foundHomeTeam || !foundAwayTeam) {
      return null;
    }
    return true;
  }

  public async create(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatch> {
    const result = await this._matchModel
      .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
    return result;
  }

  public async update(homeTeamGoals: number, awayTeamGoals: number, id: number) {
    await this._matchModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  public async updateInProgress(id: number) {
    await this._matchModel.update({ inProgress: false }, { where: { id } });
  }
}
