// #region imports
//***** IMPORTS *****//

/* CHAMPIONSHIPS */
const getChampionships = require('./endpoints/championships/getChampionships.js');
const getChampionshipsById = require('./endpoints/championships/getChampionshipsById.js');
const getChampionshipsMatches = require('./endpoints/championships/getChampionshipsMatches.js');
const getChampionshipsSubscriptions = require('./endpoints/championships/getChampionshipsSubscriptions.js');
const getChampionshipsResults = require('./endpoints/championships/getChampionshipsResults.js');

/* GAMES */
const getGames = require('./endpoints/games/getGames.js');
const getGamesMatchmakings = require('./endpoints/games/getGamesMatchmakings.js');
const getGamesById = require('./endpoints/games/getGamesById.js');
const getGamesParent = require('./endpoints/games/getGamesParent.js');

/* HUBS */
const getHubsById = require('./endpoints/hubs/getHubsById.js');
const getHubsMatches = require('./endpoints/hubs/getHubsMatches.js');
const getHubsMembers = require('./endpoints/hubs/getHubsMembers');
const getHubsRoles = require('./endpoints/hubs/getHubsRoles.js');
const getHubsRules = require('./endpoints/hubs/getHubsRules.js');
const getHubsStats = require('./endpoints/hubs/getHubsStats.js');

/* LEADERBOARDS */

/* LEAGUES */
const getLeaguesById = require('./endpoints/leagues/getLeaguesById.js');
const getLeaguesBySeasonId = require('./endpoints/leagues/getLeaguesBySeasonId.js');
const getLeaguesByPlayersId = require('./endpoints/leagues/getLeaguesByPlayersId.js');

/* MATCHES */
const getMatchesById = require('./endpoints/matches/getMatchesById.js');
const getMatchesStats = require('./endpoints/matches/getMatchesStats.js');

/* MATCHMAKINGS */
const getMatchmakingsById = require('./endpoints/matchmakings/getMatchmakingsById.js');

/* ORGANIZERS */

/* PLAYERS */
const getPlayer = require('./endpoints/players/getPlayers.js');
const getPlayerById = require('./endpoints/players/getPlayersById.js');
const getPlayerHistory = require('./endpoints/players/getPlayerHistory.js');
const getPlayerHubs = require('./endpoints/players/getPlayerHubs.js');
const getPlayerStats = require('./endpoints/players/getPlayerStats.js');
const getPlayerTeams = require('./endpoints/players/getPlayerTeams.js');
const getPlayerTournaments = require('./endpoints/players/getPlayerTournaments.js');

/* RANKINGS */
const getRanking = require('./endpoints/rankings/getRanking.js');
const getPositionRanking = require('./endpoints/rankings/getPositionInRanking.js');

/* SEARCH */
const getSearchChampionships = require('./endpoints/search/getSearchChampionships.js');
const getSearchHubs = require('./endpoints/search/getSearchHubs.js');
const getSearchOrganizers = require('./endpoints/search/getSearchOrganizers.js');
const getSearchPlayers = require('./endpoints/search/getSearchPlayers.js');
const getSearchTeams = require('./endpoints/search/getSearchTeams.js');
const getSearchTournaments = require('./endpoints/search/getSearchTournaments.js');

/* TEAMS */
const getTeamsById = require('./endpoints/teams/getTeamsById.js');
const getTeamsStats = require('./endpoints/teams/getTeamsStats.js');
const getTeamsTournaments = require('./endpoints/teams/getTeamsTournaments.js');

/* TOURNMENTS */

// #endregion

//***** CLASS *****//
class FaceitJS{
    /* #apiKeyServer;
    #apiKeyClient; */

    /* CONSTRUCTOR */
    constructor(apiKeyServerSide, apiKeyClientSide){
        this.apiKeyServer = apiKeyServerSide;
        this.apiKeyClient = apiKeyClientSide;
    }

    /* HEADERS FOR API REQUESTS */
    headers = {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ` + this.apiKeyServer,
        },
      };

    /* METHODS */
    getApiKeyServer(){
        return this.apiKeyServer;
    }

    setApiKeyServer(apiKeyServerSide){
        this.apiKeyServer = apiKeyServerSide;
    }

    getApiKeyClient(){
        return this.apiKeyClient;
    }

    setApiKeyClient(apiKeyClientSide){
        this.apiKeyClient = apiKeyClientSide;
    }

    getHeader(){
        return this.headers;
    }
}

// #region prototype
//***** PROTOTYPE *****//

/* CHAMPIONSHIPS */
FaceitJS.prototype.getChampionships = getChampionships;
FaceitJS.prototype.championships = getChampionships;

FaceitJS.prototype.getChampionshipsById = getChampionshipsById;
FaceitJS.prototype.getChampionshipById = getChampionshipsById;
FaceitJS.prototype.championshipsById = getChampionshipsById;
FaceitJS.prototype.championshipById = getChampionshipsById;

FaceitJS.prototype.getChampionshipsMatches = getChampionshipsMatches;
FaceitJS.prototype.championshipsMatches = getChampionshipsMatches;

FaceitJS.prototype.getChampionshipsResults = getChampionshipsResults;
FaceitJS.prototype.championshipsResults = getChampionshipsResults;

FaceitJS.prototype.getChampionshipsSubscriptions = getChampionshipsSubscriptions;
FaceitJS.prototype.championshipsSubscriptions = getChampionshipsSubscriptions;

/* GAMES */
FaceitJS.prototype.getGames = getGames;
FaceitJS.prototype.games = getGames;

FaceitJS.prototype.getGamesMatchmakings = getGamesMatchmakings;
FaceitJS.prototype.gamesMatchmakings = getGamesMatchmakings;

FaceitJS.prototype.getGamesById = getGamesById;
FaceitJS.prototype.getGameById = getGamesById;
FaceitJS.prototype.gamesById = getGamesById;
FaceitJS.prototype.gameById = getGamesById;

FaceitJS.prototype.getGamesParent = getGamesParent;
FaceitJS.prototype.gamesParent = getGamesParent;

/* HUBS */
FaceitJS.prototype.getHubsById = getHubsById;
FaceitJS.prototype.getHubById = getHubsById;
FaceitJS.prototype.hubsById = getHubsById;
FaceitJS.prototype.hubById = getHubsById;

FaceitJS.prototype.getHubsMatches = getHubsMatches;
FaceitJS.prototype.hubsMatches = getHubsMatches;

FaceitJS.prototype.getHubsMembers = getHubsMembers;
FaceitJS.prototype.hubsMembers = getHubsMembers;

FaceitJS.prototype.getHubsRoles = getHubsRoles;
FaceitJS.prototype.hubsRoles = getHubsRoles;

FaceitJS.prototype.getHubsRules = getHubsRules;
FaceitJS.prototype.hubsRules = getHubsRules;

FaceitJS.prototype.getHubsStats = getHubsStats;
FaceitJS.prototype.hubsStats = getHubsStats;

/* LEADERBOARDS */

/* LEAGUES */
FaceitJS.prototype.getLeaguesById = getLeaguesById;
FaceitJS.prototype.getLeagueById = getLeaguesById;
FaceitJS.prototype.leaguesById = getLeaguesById;
FaceitJS.prototype.leagueById = getLeaguesById;

FaceitJS.prototype.getLeaguesBySeasonId = getLeaguesBySeasonId;
FaceitJS.prototype.getLeagueBySeasonId = getLeaguesBySeasonId;
FaceitJS.prototype.leaguesBySeasonId = getLeaguesBySeasonId;
FaceitJS.prototype.leagueBySeasonId = getLeaguesBySeasonId;

FaceitJS.prototype.getLeaguesByPlayersId = getLeaguesByPlayersId;
FaceitJS.prototype.getLeagueByPlayersId = getLeaguesByPlayersId;
FaceitJS.prototype.leaguesByPlayersId = getLeaguesByPlayersId;
FaceitJS.prototype.leagueByPlayersId = getLeaguesByPlayersId;

/* MATCHES */
FaceitJS.prototype.getMatchesById = getMatchesById;
FaceitJS.prototype.getMatchById = getMatchesById;
FaceitJS.prototype.matchesById = getMatchesById;
FaceitJS.prototype.matchById = getMatchesById;

FaceitJS.prototype.getMatchesStats = getMatchesStats;
FaceitJS.prototype.matchesStats = getMatchesStats;

/* MATCHMAKINGS */
FaceitJS.prototype.getMatchmakingsById = getMatchmakingsById;
FaceitJS.prototype.matchmakingsById = getMatchmakingsById;

/* ORGANIZERS */

/* PLAYERS */
FaceitJS.prototype.getPlayer = getPlayer;
FaceitJS.prototype.player = getPlayer;

FaceitJS.prototype.getPlayerById = getPlayerById;
FaceitJS.prototype.playerById = getPlayerById;

FaceitJS.prototype.getPlayerHistory = getPlayerHistory;
FaceitJS.prototype.playerHistory = getPlayerHistory;

FaceitJS.prototype.getPlayerHubs = getPlayerHubs;
FaceitJS.prototype.playerHubs = getPlayerHubs;

FaceitJS.prototype.getPlayerStats = getPlayerStats;
FaceitJS.prototype.playerStats = getPlayerStats;

FaceitJS.prototype.getPlayerTeams = getPlayerTeams;
FaceitJS.prototype.playerTeams = getPlayerTeams;

FaceitJS.prototype.getPlayerTournaments = getPlayerTournaments;
FaceitJS.prototype.playerTournaments = getPlayerTournaments;

/* RANKINGS */
FaceitJS.prototype.getRanking = getRanking;
FaceitJS.prototype.ranking = getRanking;

FaceitJS.prototype.getPositionRanking = getPositionRanking;
FaceitJS.prototype.getPositionPlayer = getPositionRanking;

/* SEARCH */
FaceitJS.prototype.getSearchChampionships = getSearchChampionships;
FaceitJS.prototype.searchChampionships = getSearchChampionships;

FaceitJS.prototype.getSearchHubs = getSearchHubs;
FaceitJS.prototype.searchHubs = getSearchHubs;

FaceitJS.prototype.getSearchOrganizers = getSearchOrganizers;
FaceitJS.prototype.searchOrganizers = getSearchOrganizers;

FaceitJS.prototype.getSearchPlayers = getSearchPlayers;
FaceitJS.prototype.searchPlayers = getSearchPlayers;

FaceitJS.prototype.getSearchTeams = getSearchTeams;
FaceitJS.prototype.searchTeams = getSearchTeams;

FaceitJS.prototype.getSearchTournaments = getSearchTournaments;
FaceitJS.prototype.searchTournaments = getSearchTournaments;

/* TEAMS */
FaceitJS.prototype.getTeamsById = getTeamsById;
FaceitJS.prototype.getTeamById = getTeamsById;
FaceitJS.prototype.teamsById = getTeamsById;
FaceitJS.prototype.teamById = getTeamsById;

FaceitJS.prototype.getTeamsStats = getTeamsStats;
FaceitJS.prototype.teamsStats = getTeamsStats;

FaceitJS.prototype.getTeamsTournaments = getTeamsTournaments;
FaceitJS.prototype.teamsTournaments = getTeamsTournaments;

/* TOURNMENTS */
// #endregion

//***** EXPORT *****//
module.exports = FaceitJS;