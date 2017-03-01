$(function() {

  $("#submit-btn").click(function (event) {
    event.preventDefault();

    var city = $("#city-type").val();

    if (city = "San Francisco" || "SF" || "Bay Area") {
      $("body").attr("class", "sf");
    
    } else if (city = "New York" || "New York City" || "NYC") {
      $("body").attr("class", "nyc");

    } else if (city = "Los Angeles" || "LA" || "LAX") {
      $("body").attr("class", "la");

    } else if (city = "Austin" || "ATX") {
      $("body").attr("class", "austin");

    } else if (city = "Sydney" || "SYD") {
      $("body").attr("class", "sydney");

    } else {
      $("body").css("background", "gray");
    }


    });


});

