$(function() {

  $('form').submit(switcher);

    function switcher(event) {
      event.preventDefault();
      var inputinfo = $('#city-type').val();
      // console.log(inputinfo);
      if (inputinfo === "New York" || inputinfo === "NYC" || inputinfo === "New York City" || inputinfo === "nyc") {
      console.log('empire');
      $('body').css('background-image', 'url(../homework-04-citipix/images/nyc.jpg)')

    } if (inputinfo === "la" || inputinfo === "LA" || inputinfo === "LAX" || inputinfo === "Los Angeles") {
      console.log('famous');
      $('body').css('background-image', 'url(../homework-04-citipix/images/la.jpg)')

    } if (inputinfo === "Austin" || inputinfo === "ATX") {
      console.log('texas');
      $('body').css('background-image', 'url(../homework-04-citipix/images/austin.jpg)')

    } if (inputinfo === "San Fransico" || inputinfo === "SF" || inputinfo === "Bay Area" || inputinfo === "sf") {
      console.log('hyphy');
      $('body').css('background-image', 'url(../homework-04-citipix/images/sf.jpg)')

    } if (inputinfo === "Sydney" || inputinfo === "SYD"){
      console.log('manly beach');
      $('body').css('background-image', 'url(../homework-04-citipix/images/sydney.jpg)')
    }
  }

});
