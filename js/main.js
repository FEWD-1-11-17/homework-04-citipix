$(function() {

  // 1. listen when user click the button
  $("#submit-btn").on('click', function(event) {
    event.preventDefault();

    // console.log('button is clicked');
    // console.log($("#submit-btn").attr("placeholder"));

  // 2. store and validate user input
    var userInput = $("#city-type").val();

    // console.log(userInput);

  // 3. remove existing class
    $("body").removeClass();

  // 4. create conditionals to change bg depending on input
    if (userInput === "New York" || userInput === "New York City" || userInput === "NYC") {
      $("body").addClass("nyc");

    } else if (userInput === "San Francisco" || userInput === "SF" || userInput === "Bay Area") {
        $("body").addClass("sf");

    } else if (userInput === "Los Angeles" || userInput === "LA" || userInput === "LAX") {
        $("body").addClass("la");

    } else if (userInput === "Austin" || userInput === "ATX") {
        $("body").addClass("austin");

    } else if (userInput === "Sydney" || userInput === "SYD") {
        $("body").addClass("sydney");

    }

  });

});



// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city
// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
// Create if / else if / else conditionals to control the flow of your application
// Write at least six different lines of pseudocode and display them inline as JavaScript comments
// Prevent a form submission using the event.preventDefault() function
// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
// Get the first element from an attribute name using $.attr()
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
// If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg
