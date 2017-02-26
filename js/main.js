$(function() {


//1. define variable 
var city;
//2. listen for submit event
$("form").submit(enter);

//3. fetch and store city in variable 
function enter(e) {
  e.preventDefault();
  var newCity = $("#city-type").val();
  console.log(newCity);
}

//4. Display background image matching variable 
//5. clear out text field

});