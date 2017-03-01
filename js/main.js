$(function() {

  //listen for the user to click the submit button
  $("#submit-btn").click(function (event) {

    //prevent the default 
    event.preventDefault();

    //store the user input as a variable
    var city = $("#city-type").val();

    //determine what the user input
    if (city === "San Francisco") {
      //add class to the body to change color
      $("body").attr("class", "sf");
    
    } else if (city === "New York") {
      $("body").attr("class", "nyc");

    } else if (city === "Los Angeles") {
      $("body").attr("class", "la");

    } else if (city === "Austin") {
      $("body").attr("class", "austin");

    } else if (city === "Sydney") {
      $("body").attr("class", "sydney");

    } else {
      
    }

// I don't know why the conditional ors aren't working

    // if (city === "San Francisco" || "SF" ||"Bay Area") {
    //   //add class to the body to change color
    //   $("body").attr("class", "sf");
    
    // } else if (city === "New York" || "New York City" || "NYC") {
    //   $("body").attr("class", "nyc");

    // } else if (city === "Los Angeles" || "LA" || "LAX") {
    //   $("body").attr("class", "la");

    // } else if (city === "Austin" || "ATX") {
    //   $("body").attr("class", "austin");

    // } else if (city === "Sydney" || "SYD") {
    //   $("body").attr("class", "sydney");

    // } else {
    //   $("body").css("background", "gray");
    // }


    });


});

