//Requiring the data from the friends.js file.
var friendsData = require("../data/friends");

//Creating function that will tie to the server.js file.
module.exports = function(app) {

    //Reading what's inside of the friends.js file.
    app.get("/api/friends", function(req, res) {
        
        return res.json(friendsData);

    });
    
    //Creating new friend and adding data to the friends array.
    app.post("/api/friends", function(req, res) {
        
        friendsData.push(req.body);
        res.json(true);

    });
     
};