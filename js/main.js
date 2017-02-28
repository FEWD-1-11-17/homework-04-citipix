$ (function() {

  // 1. Define variable

  var city;

  // 2. Listen for submit event on form or click event on "update"

  $('#submit-btn').click(scan);

  // 3. Declare a function to retrieve values from field and store in variable

  // Declare function
  function scan(event) {
  
    // Clear default event functionality 
    event.preventDefault();
    
    // Store variable 
    var city = $("#city-type").val();
    
    // Print in console log to confirm variable stored and variable type 
    console.log(city);
    console.log(typeof city === 'string');

  // 4. Change backgroud Image Based on Entries

    if (city === 'New York' || city === 'NYC' || city === 'New York City') {
        $('body').css('background-image','url(images/nyc.jpg)');
      } else if (city === 'San Francisco' || city === 'Bay Area' || city === 'SF') {
        $('body').css('background-image','url(images/sf.jpg)');
      } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
        $('body').css('background-image','url(images/la.jpg)');
      } else if (city === 'Austin' || city === 'ATX') {
        $('body').css('background-image','url(images/austin.jpg)');
      } else if (city === 'Sydney' || city === 'SYD') {
        $('body').css('background-image','url(images/sydney.jpg)');
      // *This is test code used to confirm functionality. Do not use* 
      // } else if(city === 'test')  {
      //   alert('syntax is working');
      } else {
        $('body').css('background-image','url(images/citipix_skyline.jpg)');
      }

  }
});