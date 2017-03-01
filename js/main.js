$(function() {


  //1. define variable 
  var city;
  //2. listen for submit event
  $("form").submit(enter);

  //3. fetch and store city in variable 
  function enter(event) {
    event.preventDefault();
    var city = $("#city-type").val();
    //.4 print city
    console.log(city);
    console.log(typeof city === "string")

    //5. error on empty field 
    if (city === "") {
      alert('please enter a city')
    } else {

      //6. Display background image matching variable 
      if (city === "NYC" || city === "New York" || city === "New York City") {
        $('body').css('background', 'url(images/nyc.jpg)');
      } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
        $('body').css('background', 'url(images/sf.jpg)');
      } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
        $('body').css('background', 'url(images/la.jpg)');
      } else if (city === "Austin" || city === "ATX") {
        $('body').css('background', 'url(images/austin.jpg)');
      } else if (city === "Sydney" || city === "SYD") {
        $('body').css('background', 'url(images/sydney.jpg)');
      }

      //7. display defualt background if nothing matches
      else {
        $('body').css('background', 'url(images/citipix_skyline.jpg)');
      }


    }
  }
});
