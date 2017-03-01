$(document).ready(function() {
  //prevent default actions
  $('#submit-btn').click(function(event) {
    event.preventDefault();
    
    //get the value of the #city-type input
    var city = $('#city-type').val();
    $('#city-type').val('');
    
    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').addClass('nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').addClass('sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').addClass('austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').addClass('la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').addClass('sydney');
    }
    
  });
});