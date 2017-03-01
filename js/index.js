$(function() {

//user inputs city
//fetch input from form and store in a var
//user clicks enter or update btn to change bkrd
//background changes to the picture associated with that input

  var city

  // 1. listen for a submit event on form
  $('#entry').submit(cityInput)

  // 2. create function for the submit event
  function cityInput(event) {
    event.preventDefault();
    // console.log("worrkinggg?");

  // 3. fetch city input and store in var called city
  // 4. ensure that input isn't case sensitive
    city = $('#city-type').val().toLowerCase();

  // 5. create conditionals for changing background images
  // 6. dynamically add a class attribute to the body by calling on defined classes in css (ie: .nyc)
    if (city === "new york" || city === "new york city" || city === "nyc") {
      // console.log("Load NY image") 
      $('body').attr('class','nyc');
    
    } else if (city === "san francisco" || city === "sf" || city === "bay area") {
        $('body').attr('class','sf');

    } else if (city === "los Angeles" || city === "la" || city === "lax") {
        $('body').attr('class','la');

    } else if (city === "austin" || city === "atx") {
        $('body').attr('class','austin');

    } else if (city === "sydney" || city === "syd") {
        $('body').attr('class','sydney');

    }

  }


});