// ###Technical Requirements

// - Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Get the first element from an attribute name using ```$.attr()```
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
// - If a user submits:

//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//   - "Austin" or "ATX" make the background of the page austin.jpg
//   - "Sydney" or "SYD" make the background of the page sydney.jpg

$ (function() {

  // 1. Define variable

  var city;

  // 2. Listen for submit event on form or click event on "update"

  $('#submit-btn').click(scan);

  // 3. Retrieve values from field and store in variable

  function scan(event) {
    event.preventDefault();
    var city = $('#city-type').val();
    console.log(city);
    console.log(typeof city === 'string');

  }
  // 4. Change backgroud Image Based on Entries


});