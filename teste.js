const faceit = require('./FaceitJS');

const faceitApi = new faceit("a8a3ecf2-41b7-42f8-a629-240264706a63", "asd");

async function teste(){
    faceitApi.getPlayerHubs("2995ec02-0df5-48da-a780-5e5d8270d8d5").then((response) =>{
        console.log(response)
    }).catch((err) =>{
        console.error(err);
    })
}

teste();