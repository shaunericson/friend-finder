// HTML Route requests

var express = require("express");
var router = express.Router();
var path = require("path");
var friendsObject = require("../data/friends");

router.get("/api/friends", function (req, res) {

    // console.log("tesat");
    // console.log(friendsObject)
    // console.log(friendsObject.length);
    // var friendsObjectL = friendsObject.length;

    // console.log(friendsObject);

    var matchTotalDifference;

    if (friendsObject.length >= 2) {
        for (i = 0; i < (friendsObject.length - 1); i++) {
            var currentUser = friendsObject[friendsObject.length - 1];
            // console.log("Current User: " + currentUser.name);
            // console.log("Name: " + friendsObject[i].name);
            // console.log("Through Big Array")
            var totalDifference = [];
            for (x = 0; x < (friendsObject[i].scores.length); x++) {
                // console.log(friendsObject[i].name);
                // console.log(friendsObject[i].scores[x])
                // console.log(currentUser.scores[x]);
                var question = Math.abs((currentUser.scores[x]) - (friendsObject[i].scores[x]));
                totalDifference.push(question);
                // console.log(totalDifference);
            }
            
            console.log(totalDifference);
            // function for adding two numbers. Easy!
            const add = (a, b) =>
                a + b
            // // use reduce to sum our array
            const sum = totalDifference.reduce(add)

            console.log(sum);

            if (isNaN(matchTotalDifference)) {
                console.log("Through first array")
                matchTotalDifference = sum;
                var match = friendsObject[i];
            } else if (sum < matchTotalDifference) {
                console.log("hit sub-array")
                matchTotalDifference = sum;
                var match = friendsObject[i];
            }
            
            console.log(match);
        }
    } else {
        console.log("Need another match!")
    }

    // return res.json(friendsObject);
    return res.json(match);
    // return res.match;

})

router.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    for (i = 0; i < newFriend.scores.length; i++) {
        // console.log("Arrays being converted");
        // console.log(newFriend.scores[i]);
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
        // console.log(newFriend.scores[i]);
    }

    // console.log("got to API Route")
    // console.log(newFriend)
    friendsObject.push(newFriend);
    // console.log(friendsObject);

})

console.log(friendsObject.length)

module.exports = router;