// Javascript connecting HTML to back end

$(document).ready(function () {

    function getFriendMatch() {
        $.get("/api/friends", function (result) {
            
        console.log(result);

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