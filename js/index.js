$(function() {

    // yellow submit button will be listening for a click
    $("form").submit(function() {

    // the function that the "submit button" will read 
        event.preventDefault();
        var city = $('#city-type').val();
        // console.log("this is the city of " + city);
        // console.log(typeof city === 'string');

        if (city === "New York City" || city === "New York" || city === "NYC") {
            
            // conditional sensitive for New York City tags
            $("body").css('background-image', 'url("images/nyc.jpg")');
            
        } else if (city === "San Francisco" || city === "Bay Area" || city === "SF"){
            
            // // conditional sensitive for San Francisco tags
            $("body").css('background-image', 'url("images/sf.jpg")');
        
        } else if (city === "Los Angeles" || city === "LAX" || city === "LA"){
            
            // conditional sensitive for Los Angeles tags
            $("body").css('background-image', 'url("images/la.jpg")');
        
            // conditional sensitive for Austin tags
        } else if (city === "Austin" || city === "ATX"){
            
            $("body").css('background-image', 'url("images/austin.jpg")');
        
            // conditional sensitive for Sydney tags
        } else if (city === "SYD" || city === "Sydney"){
            
            $("body").css('background-image', 'url("images/sydney.jpg")');
        
        } else {

            // if text-field is not match any tags above, print default picture
            $("body").css('background-image', 'url("images/citipix_skyline.jpg")');
        }
        
    });

});