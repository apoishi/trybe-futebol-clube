import { ITeam } from '../interfaces/ITeam';
import TeamModel from '../database/models/team.model';

export default class TeamsService {
  private _teamModel = TeamModel;

  public async findAll(): Promise<ITeam[]> {
    const result = await this._teamModel.findAll({ raw: true });
    return result as ITeam[];
  }

  public async findOne(id: number): Promise<ITeam> {
    const result = await this._teamModel.findByPk(id);
    return result as ITeam;
  }
}
