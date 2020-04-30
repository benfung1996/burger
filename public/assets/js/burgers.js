$(function() {
    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");

        var newStatus = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(function() {
            console.log("Devoured");
            location.reload();
        });
    });
});

$(".create-form").on("submit", function(event) {
    event.preventDefualt();

    var newBurger = {
        name: $("#burgerInput").val().trim(),
        devoured: 0
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Created new burger");
        location.reload();
    });
});

