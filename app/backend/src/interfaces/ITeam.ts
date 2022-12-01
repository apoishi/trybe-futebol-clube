export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ITeams extends ITeam {
  teams: Array<ITeam>;
}
