//Defining array that will be the json object and nest all friends in the DB.
var friends = [];

//Creating function that will tie to the server.js file.
module.exports = function(app) {

    //Reading what's inside of the friends array.
    app.get("/api/friends", function(req, res) {
        
        return res.json(friends);

    });
    
    //Creating new friend and adding data to the friends array.
    app.post("/api/friends", function(req, res) {
        
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);

    });
     
}

