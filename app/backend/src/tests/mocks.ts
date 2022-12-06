export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2OTI5Mzg5NCwiZXhwIjoxNjY5MzgwMjk0fQ.4JU9ZZc-asHUQGyaJ3YG4BUgdiXyLzdXfAXDVMYkyu0';

export const usersMock = {
  id: 1,
  user: 'user',
  email: 'users@test.com',
  role: 'user',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

export const teamsMock = [
  { "id": 1, "teamName": "Avaí/Kindermann" },
  { "id": 2, "teamName": "Bahia" }
]

export const matchesMock = [
    {
      id: 1,
      homeTeam: 16,
      homeTeamGoals: 1,
      awayTeam: 8,
      awayTeamGoals: 1,
      inProgress: false,
      homeTeamMatch: {
        teamName: 'São Paulo'
      },
      awayTeamMatch: {
        teamName: 'Grêmio'
      }
    },
    {
      id: 2,
      homeTeam: 9,
      homeTeamGoals: 1,
      awayTeam: 14,
      awayTeamGoals: 1,
      inProgress: false,
      homeTeamMatch: {
        teamName: 'Internacional'
      },
      awayTeamMatch: {
        teamName: 'Santos'
      }
    }
  ]