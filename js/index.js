$(function() {

  // 1. Retrieve user input (city)

  $("#submit-btn").click(function change(event) {
    event.preventDefault();

    // 2. Store user input as a variable  
    var inputCity = $("#city-type").val();
    var city = inputCity.toLowerCase();

    // 3. Change background image by adding a class
    if (city === "new york city" || city === "new york" || city === "nyc") {
      $("body").addClass("nyc");
    }

    else if (city === "san francisco" || city === "sf" || city === "bay area") {
      $("body").addClass("sf");
    }

    else if (city === "los angeles" || city === "la" || city === "lax") {
      $("body").addClass("la");
    }

    else if (city === "austin" || city === "atx") {
      $("body").addClass("austin");
    }

    else if (city === "sydney" || city === "syd") {
      $("body").addClass("sydney");
    }

    else {
      alert("Please Choose a Different City");
    }

  });

});