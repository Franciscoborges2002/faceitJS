// #region imports
//***** IMPORTS *****//

/* CHAMPIONSHIPS */

/* GAMES */

/* HUBS */

/* LEADERBOARDS */

/* LEAGUES */

/* MATCHES */
const getMatchesById = require('./endpoints/matches/getMatchesById.js');
const getMatchesStats = require('./endpoints/matches/getMatchesStats');

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

/* GAMES */

/* HUBS */

/* LEADERBOARDS */

/* LEAGUES */

/* MATCHES */
FaceitJS.prototype.getMatchesById = getMatchesById;
FaceitJS.prototype.matchesById = getMatchesById;

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
FaceitJS.prototype.teamsById = getTeamsById;

FaceitJS.prototype.getTeamsStats = getTeamsStats;
FaceitJS.prototype.teamsStats = getTeamsStats;

FaceitJS.prototype.getTeamsTournaments = getTeamsTournaments;
FaceitJS.prototype.teamsTournaments = getTeamsTournaments;

/* TOURNMENTS */
// #endregion

//***** EXPORT *****//
module.exports = FaceitJS;