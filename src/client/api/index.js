import axios from "axios";

export const parseAPI = async () => {
  try {
    return await axios.get(
      "http://data.nba.net/10s/prod/v1/20180315/scoreboard.json"
    );
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const getTeamData = (game, key) => ({
  score: game[key].score,
  losses: game[key].loss,
  wins: game[key].win,
  teamId: game[key].teamId,
  triCode: game[key].triCode
});

export const getTeamsData = games =>
  games.map(game => ({
    hTeam: getTeamData(game, "hTeam"),
    vTeam: getTeamData(game, "vTeam")
  }));
