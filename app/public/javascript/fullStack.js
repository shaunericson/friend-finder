// Javascript connecting HTML to back end

$(document).ready(function () {

    function getFriendMatch() {

        $("#friendMatch").empty();

        $.get("/api/friends", function (result) {

            console.log(result);
            console.log(result.name);
            // console.log(result.length)
            // for (x = 0; x < result.length; x++) {
                // console.log(result[x].customerName);
                var p1 = $("<p>");
                p1.text("Best Friend Match: " + result.name);
                var p3 = $("<p>");
                p3.text("Answer 1: " + result.scores[0]);
                var p4 = $("<p>");
                p4.text("Answer 2: " + result.scores[1]);
                $("#friendMatch").append(p1);
                // $("#rezos").append(p2);
                $("#friendMatch").append(p3);
                $("#friendMatch").append(p4);
            // }

        })
    }

    $("#submit").on("click", function () {

        // console.log("help!");

        event.preventDefault();

        var friendName = $("#name").val().trim();
        var photo = $("#photo").val().trim();
        var q1 = parseInt($("#q1").val());
        var q2 = parseInt($("#q2").val());

        console.log(friendName);
        console.log(photo);
        console.log(q1);
        console.log(q2);

        var newFriend = {
            name: friendName,
            photo: photo,
            scores: [q1, q2]
        }

        $.post("/api/friends",
            newFriend,
            function (data, status) {
                console.log("Data: " + data.success + "\nStatus: " + status);
            })

        getFriendMatch();

        $("#name").val("");
        $("#photo").val("");
        $("#q1").val("");
        $("#q2").val("");

    })
})