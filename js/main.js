// ###Technical Requirements

// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Get the first element from an attribute name using ```$.attr()```

$ (function() {

  // 1. Define variable

  var city;

  // 2. Listen for submit event on form or click event on "update"

  $('#submit-btn').click(scan);

  // 3. Declare a function to retrieve values from field and store in variable

  function scan(event) {
    event.preventDefault();
    var city = $('#city-type').val();
    
    // print in console log to confirm function working and variable type 
    console.log(city);
    console.log(typeof city === 'string');

  // 4. Change backgroud Image Based on Entries

    if (city === 'New York' || city === 'NYC' || city === 'New York City') {
        $('body').css('background-image','url(../images/nyc.jpg)');
      } else if (city === 'San Francisco' || city === 'Bay Area' || city === 'SF') {
        $('body').css('background-image','url(../images/sf.jpg)');
      } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
        $('body').css('background-image','url("../images/la.jpg")');
      } else if (city === 'Austin' || city === 'ATX') {
        $('body').css('background-image','url("../images/austin.jpg")');
      } else if (city === 'Sydney' || city === 'SYD') {
        $('body').css('background-image','url("../images/sydney.jpg")');
      } else if(city === 'test')  {
        alert('syntax is working');
      } 
      // Remove test when complete
  }
});