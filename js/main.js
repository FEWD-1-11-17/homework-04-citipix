$(function() {
  var state = ['nyc', 'sf', 'sydney','la', 'austin'];

  $('form').submit(changeBackground);
  
      function changeBackground() {
        event.preventDefault()

        
        // var city = $(this).attr("id").val();
          var city = $('#city-type').val();

          console.log(city);
          if (city === 'nyc' || 'new york city' || 'new york') {
            $('body').attr("backgroundImage", "url(/images/nyc.jpg))");
          
          } else if (city === 'sf' || 'san francisco' || 'bay area') {
            $('body').attr("backgroundImage", "url(../images/sf.jpg))");

          } else if (city === 'sydney' || 'syd') {
            $('body').attr("backgroundImage", "url(../images/sydney.jpg))");
          
          } else if (city === 'los angeles' || 'la' || 'lax') {
            $('body').attr("backgroundImage", "url(../images/la.jpg))");

          } else if (city === 'austin' || 'atx') {
            $('body').attr("backgroundImage", "url(../images/austin.jpg))");

          } else{
              alert("Try a Homework City");
          }
      }

});