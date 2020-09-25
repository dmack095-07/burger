$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Adding new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devouredBurger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredBurger = {
        devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("Burger devoured!", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Burger deleted", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
