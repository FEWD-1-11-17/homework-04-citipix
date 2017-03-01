$(function() {

  //listen for the user to click the submit button
  $("#submit-btn").click(function (event) {

    //prevent the default 
    event.preventDefault();

    //store the user input as a variable
    var city = $("#city-type").val();

    //determine what the user input
    if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
      //add class to the body to change color
      $("body").attr("class", "sf");

    } else if (city === "Los Angeles" || city ==="LA" || city ==="LAX") {
      $("body").attr("class", "la");

    } else if (city === "Austin" || city === "ATX") {
      $("body").attr("class", "austin");

    } else if (city === "Sydney" || city === "SYD") {
      $("body").attr("class", "sydney");

    } else if (city === "New York" || city === "New York City" || city === "NYC") {
      $("body").attr("class", "nyc");

    } else {
      alert("not a valid answer");
    }


    });


});

