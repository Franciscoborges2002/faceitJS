const axios = require("axios");
const urlConstructorUtil = require('../../utils/urlConstructor.js');
const getHeaders = require('../../utils/headers.js');
/*
    Uses url https://open.faceit.com/data/v4/championships
    Method: GET
    Parameters: -expanded {lis of name to expand in the request} possible names: organizer, game.
    Description: 
*/
module.exports = async function getChampionshipsById(championshipId, expanded) {
    //verify if expanded is an array
    if(!Array.isArray(expanded)){
        return new Error('Be sure that second argument is an array.');
    }

  let apiKey = this.getApiKeyServer();
  let headers = getHeaders(apiKey);

  let baseURL = "https://open.faceit.com/data/v4/championships";

  //get url
  let url = urlConstructorUtil(baseURL, [''], [championshipId], ['expanded'], [expanded], {});

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