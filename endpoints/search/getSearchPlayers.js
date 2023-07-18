const axios = require("axios");
const urlConstructorUtil = require('../../utils/urlConstructor.js');
const getHeaders = require('../../utils/headers.js');
/*
    Uses url https://open.faceit.com/data/v4/search
    Method: GET
    Parameters: 
    Description: 
*/
module.exports = async function getSearchPlayers(playerName, game = '' ,country = '', offset = 0,limit = 20) {
  let apiKey = this.getApiKeyServer();
  let headers = getHeaders(apiKey);

  let baseURL = "https://open.faceit.com/data/v4/search";

  let searchOptions = {
    offset: offset,
    limit: limit
  }

  //get url
  let url = urlConstructorUtil(baseURL, ['players'], [''], ['nickname', 'game', 'country'], [playerName, game, country], searchOptions);
  //try catch to make the call via axios
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