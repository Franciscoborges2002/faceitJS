// #region imports
//***** IMPORTS *****//

/* CHAMPIONSHIPS */

/* GAMES */

/* HUBS */

/* LEADERBOARDS */

/* LEAGUES */

/* MATCHES */

/* MATCHMAKINGS */

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

/* SEARCH */

/* TEAMS */

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

/* MATCHMAKINGS */

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

/* SEARCH */

/* TEAMS */

/* TOURNMENTS */
// #endregion

//***** EXPORT *****//
module.exports = FaceitJS;