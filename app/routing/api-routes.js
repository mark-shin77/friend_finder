var friends = require('friends');

module.exports = function(app){
    app.get('friends', function(req, res){
        res.json(friends);
    })
}