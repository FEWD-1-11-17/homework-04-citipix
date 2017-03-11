$(function() {

    $('form').submit(function (){

            event.preventDefault();
            var value = $("#city-type").val().toLowerCase();
            // New York City
            if (value === "nyc" || value === "new york city" || value === "new york") {
                $("body").attr("class","nyc");
            }

            // San Franscisco
            if (value === "san francisco" || value === "sf" || value === "bay area") {
                $("body").attr("class","sf");
            }

            // Los Angeles
            if (value === "los angeles" || value === "la" || value === "lax") {
                $("body").attr("class","la");
            }

            // Austin
            if (value === "austin" || value === "atx") {
                $("body").attr("class","austin");
            }

            // Sydney
            if (value === "sydney" || value === "syd") {
                $("body").attr("class","sydney");
            }




            // else if (value ==="") {

            // } else if (  conditions ) { 
            //     ...
            // } else {
            //     ....
            // }


        }
    );





//PSEUDO-CODE

//2. Parse that data to see whether it's one of cities in the spec
//3. If "New York" , "New York City" or "NYC", change body class to ".nyc"
//4. If "San Francisco", "SF", or "Bay Area", change body class to ".sf"
//5. If "Los Angeles" or "LA" or "LAX" change body class to ".la"
//6. If "Austin" or "ATX" change body class to ".austin"
//7. If "Sydney" or "SYD" change body class to ".sydney"

});
