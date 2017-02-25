$(function(){

// 1. Define and declare variables 
var city; 

// 2. Listen for submit event on form 

$("#submit-btn").click(changeImage)

// 3. Fetch text entered and store it in a variable 

function changeImage () {
  event.preventDefault();
    var city = $("#city-type").val();
      // console.log(city);
      // console.log(typeof city === "string"); 


// 4. Display background image that corresponds to text entered

  if (city === "New York" || city === "New York City" || city === "NYC") {
    $('body').css('background-image', 'url(images/nyc.jpg)');
  } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
    $('body').css('background-image', 'url(images/sf.jpg)');
  } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
    $('body').css('background-image', 'url(images/la.jpg)');
  } else if (city === "Austin" || city === "ATX") {
    $('body').css('background-image', 'url(images/austin.jpg)');
  } else if (city === "Sydney" || city === "SYD") {
    $('body').css('background-image', 'url(images/sydney.jpg)');
  } else {
    $('body').css('background-image', 'url(images/citipix_skyline.jpg)');
  } 

// 5. Clear text field 

  $("#city-type").val("");

}


});
