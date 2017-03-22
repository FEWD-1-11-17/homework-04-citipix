$ (function() {

  //1. listen for submit event on form
  $('#submit-btn').click(function(){ 

    //2. prevent form submission by using prevent default
    event.preventDefault();

    //3. Store variable 
    var city = $('#city-type').val();
    
    //4. convert to string
    $('#city-input').val('');
     
       //5. Print in console log to confirm variable stored and variable type
       console.log(city);
       console.log(typeof city === 'string');

        // 6. Change backgroud Image Based on Entries
        if (city == "NYC" || city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){ // How do I do other options: ny, New york, etc?
          $('body').attr('class','nyc');
        } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
           $('body').attr('class','sf');
        } else if (city == "LA" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
           $('body').attr('class','la');
        } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
           $('body').attr('class','austin');
        } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
           $('body').attr('class','sydney');
        }
  });
});
  



