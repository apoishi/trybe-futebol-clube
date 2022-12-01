import { ITeams, ITeam } from '../interfaces/ITeam';
import TeamModel from '../database/models/teams.model';

export default class TeamsService {
  private _teamModel = TeamModel;

  public async findAll(): Promise<ITeams> {
    const result = await this._teamModel.findAll();
    // console.log(result);
    return result as unknown as ITeams;
  }

  public async findOne(id: number): Promise<ITeam> {
    const result = await this._teamModel.findByPk(id);
    return result as ITeam;
  }
}
