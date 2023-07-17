

module.exports = function urlConstructor(baseURL, isById, arrArgs, arrArgsValues){
    let url = null;
    let questionMarkUsed = false;

    if(isById){
        url = baseURL + arrArgsValues[0];
        return url;
    }

    for(let i = 0; i < arrArgs.length; i++){
        if(!questionMarkUsed && arrArgsValues[i] !== undefined){
            url = baseURL + '?' + arrArgs[i] + '=' + arrArgsValues[i]; 
            questionMarkUsed = true;
            continue;
        }

        if(arrArgsValues[i] !== undefined){
            url = url + '&' + arrArgs[i] + '=' + arrArgsValues[i]; 
        }
    }

    return url;
}