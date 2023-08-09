A simple wrapper of faceit API in js.

# Install
 npm install faceitjs

### How to use start using it?
```
const Faceit = require("faceitjs");
const faceit = new Faceit("ApiKeySever", "ApiKeyClient");
```

### How to get info from a player?
```
faceit.getPlayer("yourFaceitName").then((response) =>{
        console.log(response)
    }).catch((err) =>{
        console.error(err);
    })
```

More soon!
