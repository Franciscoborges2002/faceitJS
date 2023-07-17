const axios = require("axios");
const urlConstructorUtil = require('../../utils/urlConstructor.js');
const getHeaders = require('../../utils/headers.js');
/*
    Uses url https://open.faceit.com/data/v4/players/
    Method: GET
    Parameters: - nickname -> The nickname of the player on FACEIT
                - game -> A game on FACEIT
                - game_player_id -> The ID of a player on game's platform
    Description: Get the info to a player
*/
module.exports = async function getPlayer(nickname, game, gamePlayerId) {
  let apiKey = this.getApiKeyServer();
  let headers = getHeaders(apiKey);

  let baseURL = "https://open.faceit.com/data/v4/players";

  //verify if has something
  if(nickname === undefined && game === undefined && gamePlayerId === undefined){
    return {Error: "Something went wrong, be sure you insert something."}
  }

  //get url
  let url = urlConstructorUtil(baseURL, false, ['nickname', 'game', 'game_player_id'], [nickname, game, gamePlayerId]);
  
  //try to make the call via axios
  try {
    let response = await axios.get(
      url,
      headers
    );
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    new Error(err.response.data);
  }
};
