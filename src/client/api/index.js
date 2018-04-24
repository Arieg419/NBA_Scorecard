import axios from "axios";

export const getGameScores = async () => {
  try {
    return await axios.get(
      "http://data.nba.net/10s/prod/v1/20180315/scoreboard.json"
    );
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const getPlayoffStandings = async () => {
  try {
    return await axios.get(
      "http://data.nba.net/10s/prod/v1/2017/playoffsBracket.json"
    );
  } catch (e) {

  }
  return null;
}

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

export const formatSeriesData = series =>
  series.map(matchup => formatSingleSeries(matchup));

export const formatSingleSeries = (singleSeries) => ({
    hTeam: {
      seedNumber: singleSeries.bottomRow.seedNum,
      teamId: singleSeries.bottomRow.teamId,
      wins: singleSeries.bottomRow.wins,
    },
    vTeam: {
      seedNumber: singleSeries.topRow.seedNum,
      teamId: singleSeries.topRow.teamId,
      wins: singleSeries.topRow.wins,
    },
    confName: singleSeries.confName,
    gameNumber: singleSeries.gameNumber,
    roundNum: singleSeries.roundNum,
    summaryStatusText: singleSeries.summaryStatusText,
})

export const teamIdToTriCode = (teamId) => {
  try {

  } catch (e) {
    console.error(e)
  }
}
