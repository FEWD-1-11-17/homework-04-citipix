//wait to run until the document is ready
$(document).ready(function() {
  
  //listen to a click event
  //call an anonyous function click event happens 
  $('#submit-btn').click(function(event) { 
    event.preventDefault();  

    //create a variable called "city" which stores the city "value" submitted
    var city = $('#city-type').val(); 

    $('#city-input').val(''); 

    //use "city" value to find out if it should equal the different entries
    //change body to change background image based on city 
    if (city === "NYC" || city === "nyc" || city === "New York" || city === "new york" || city === "New York City" || city === "new york city"){
      $('body').attr('class','nyc');
    } else if (city === "SF" || city === "sf" || city === "san fran" || city === "San Fran" || city === "San Francisco" || city === "Bay Area") {      
      $('body').attr('class','sf');
    } else if (city === "LA" || city === "los angeles" || city === "Los Angeles" || city === "LAX" || city === "la") {      
      $('body').attr('class','la');
    } else if (city === "AUS" || city === "austin" || city === "Austin" || city === "Austin Texas" || city === "ATX" || city === "atx") {      
      $('body').attr('class','austin');
    } else if (city === "SYD" || city === "sydney" || city === "Sydney" || city === "syd") {      
      $('body').attr('class','sydney');
    } else {
      //set background to default and alert user if entry inputted does not exist
      $('body').attr("class","citipix_skyline");
      alert("This city does not exist in our system, please provide details to us.");
    }
  });

});