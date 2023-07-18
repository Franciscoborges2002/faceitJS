//Function to make the url to be sent the request, and return the url
module.exports = function urlConstructor(
  baseURL,
  isById,
  id,
  midParametersArgs,
  midParametersValues,
  arrArgs,
  arrArgsValues,
  searchOptions
) {
  var url = baseURL;
  let questionMarkUsed = false;

  if (isById) {
    url = url + '/' + id;
  }

  if(midParametersArgs.length > 0){
    url = url + '/' + midParametersArgs[0];
  }

  if (arrArgs.length > 0) {
    for (let i = 0; i < arrArgs.length; i++) {
      if (
        !questionMarkUsed &&
        (arrArgsValues[i] !== "")
      ) {
        url = url + "?" + arrArgs[i] + "=" + arrArgsValues[i];
        questionMarkUsed = true;
        continue;
      }

      if (arrArgsValues[i] !== '') {
        url = url + "&" + arrArgs[i] + "=" + arrArgsValues[i];
      }
    }
  }

  if (Object.keys(searchOptions).length > 0) {
    let keys = Object.keys(searchOptions);
    let values = Object.values(searchOptions);
    for (let i = 0; i < Object.keys(searchOptions).length; i++) {
      if (!questionMarkUsed) {
        url = url + "?" + keys[i] + "=" + values[i];
        questionMarkUsed = true;
        continue;
      }

      url = url + "&" + keys[i] + "=" + values[i];
    }
  }

  return url;
};
