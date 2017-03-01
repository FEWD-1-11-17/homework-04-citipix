$(function() {
	

// 1. Listen for click 
function 
	$.on("submit")() {
	grabInput();
}
	
// 2. Take value of city input 
function grabInput(event) {
		event.preventDefault();
		("city-type").val();
	}
// 3. store string in Variable called city 

	var city = grabInput();

// 4. Variable of city input should add class to css


function changeBackgroundImage() {
	if 
	(city==="New York" || city===="New York City" || city==="NYC"){

     $('body').addClass('nyc');

   } else if 
	(city==="San Francisco" || city===="SF" || city==="Bay Area") {
     $('body').addClass('sf');

   } else if 
   	 (city==="Los Angeles" || city===="LA" || city==="LAX") {
   	  $('body').addClass('la');
   } else if
   	 (city==="Austin" || city===="ATX"){
   	  $('body').addClass('austin');
   } else 
   	(city==="Sydney" || city===="SYD"){
   	  $('body').addClass('sydney'); 
   	} 
   }


  








});