$(function() {


//1. define variable 
var city;
//2. listen for submit event
$("form").submit(enter);

//3. fetch and store city in variable 
function enter(e) {
  e.preventDefault();
  var city = $("#city-type").val();
  console.log(city);
  console.log(typeof city === "string")

//4. error on empty field 
  if (city === "") {
     alert('please enter a city')
   } else {

  //5. Display background image matching variable 
if (city === "nyc") {
  $('body').css('background', 'url(images/nyc.jpg)');
} 
else if (city === "San Francisco") {
  $('body').css('background', 'url(images/sf.jpg)');
}

//6. display defualt background if nothing matches
else {
  $('body').css('background', 'red');
}


}
}


//5. clear out text field

});