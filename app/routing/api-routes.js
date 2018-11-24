var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    })

    app.post('/api/friends', function(req, res){

        var bestMatch = {
            name: "",
            image: "",
            friendDifference: 1000
        }

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);
    })
}