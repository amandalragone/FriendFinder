//Requiring NPM packages
const express = require("express");

//Defining the port
const PORT = process.env.PORT || 3000;

//Defining the app and what it will be able to read
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Requiring files under the app/routing folder.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Setting up listener to check out if the port is active
app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
    
});
  