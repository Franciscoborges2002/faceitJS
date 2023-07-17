A simple package using axios to comunicate with faceit API.

Package is not on npm yet!

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