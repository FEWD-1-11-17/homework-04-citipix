$(function() {
  var city = ['nyc', 'sf', 'sydney','la', 'austin'];

  $('#submitButton').click(changeBackground);
  
  function changeBackground() {
    event.preventDefault()

    var city = $(this).attr("id");
    if (city === 'nyc' || 'new york city' || 'new york') {
      $('backgroundImage').css("backgroundImage", "url(../images/nyc.jpg))");
    
    } else if (city === 'sf' || 'san francisco' || 'bay area') {
      $('backgroundImage').css("backgroundImage", "url(../images/sf.jpg))");

    } else if (city === 'sydney' || 'syd') {
      $('backgroundImage').css("backgroundImage", "url(../images/sydney.jpg))");
    
    } else if (city === 'los angeles' || 'la' || 'lax') {
      $('backgroundImage').css("backgroundImage", "url(../images/la.jpg))");

    } else if (city === 'austin' || 'atx') {
      $('backgroundImage').css("backgroundImage", "url(../images/austin.jpg))");

    } else{
        alert("Try a Homework City");
    }
  }

});