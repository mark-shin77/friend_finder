// dependencies
var friends = require('../data/friends.js');

// exporting our get/post function
module.exports = function(app){
    // json data for friends 
    app.get('/api/friends', function(req, res){
        res.json(friends);
    })
    // posting user data to our db
    app.post('/api/friends', function(req, res){

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }

        var userData = req.body;
        // console.log(userData);
        var userScores = userData.scores;
        // console.log(userScores)
        var totalDifference = 0;

        // looping through all friends
        for (var x = 0; x < friends.length; x++){
            // console.log(friends[x]);
            totalDifference = 0;
            // looping through all friends scores
            for (var i = 0; i < friends[x].scores[i]; i++){
                // taking absolute value of sum of user's answers minus the sum of friend's answer
                totalDifference += Math.abs(parseInt(userScores[i]) - parseInt(friends[x].scores[i]))

                if(totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    })
}