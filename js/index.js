// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
$(function() {
  // Adding an implementation where names are mapped to an image.
  var images = {};
  loadImageMapping();

  // But we'll disable using image mapping to comply with the requirements of the assignment.
  var useImageMapping = false;
  
  subscribeToSubmitEvent();

  function subscribeToSubmitEvent(){
    // Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
    $("#submit-btn").click(handleSubmit);
  }

  function handleSubmit(){
    // Prevent a form submission using the event.preventDefault() functionUse the $.ready() handler to delay your code from executing until all DOM assets have been loaded
    event.preventDefault();
    
    // Store user input in var city
    var city = getSelectedCity();
    
    // Set the background image based on the selected city.
    setBackgroundImage(city);
  }

  function getSelectedCity(){
    // Call $.val() on inputs to get the string value of your user's input
    return $("[id=city-type]").val();
  }

  function loadImageMapping() {
    // Adding implementation where names are mapped to an image.
    // If a user submits:
    //         "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    //         "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    //         "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    //         "Austin" or "ATX" make the background of the page austin.jpg
    //         "Sydney" or "SYD" make the background of the page sydney.jpg
    images["New York"] = images["New York City"] = images["NYC"] = "nyc.jpg";
    images["San Francisco"] = images["SF"] = images["Bay Area"] = "sf.jpg";
    images["Los Angeles"] = images["LA"] = images["LAX"] = "la.jpg";
    images["Austin"] = images["ATX"] = "austin.jpg";
    images["Sydney"] = images["SYD"] = "sydney.jpg";
  }

  function setBackgroundImage(selectedCity){
    var imageFilename = "where.jpg";

    if(useImageMapping) {
      // if we are using the image mapping implementation lookup the image.
      if(selectedCity in images) {
        imageFilename = images[selectedCity];
      }
    } else {
      // Using if else to match the image to the selected city.
      // If a user submits:
      //         "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
      //         "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
      //         "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
      //         "Austin" or "ATX" make the background of the page austin.jpg
      //         "Sydney" or "SYD" make the background of the page sydney.jpg
      // Create if / else if / else conditionals to control the flow of your application
      // Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code

      if(selectedCity === "New York" || selectedCity === "New York City" || selectedCity === "NYC") imageFilename = "nyc.jpg";
      else if(selectedCity ===  "San Francisco" || selectedCity === "SF" || selectedCity === "Bay Area") imageFilename = "sf.jpg";
      else if(selectedCity === "Los Angeles" || selectedCity === "LA" || selectedCity === "LAX") imageFilename = "la.jpg";
      else if(selectedCity === "Austin" || selectedCity ==="ATX") imageFilename = "austin.jpg";
      else if(selectedCity === "Sydney" || selectedCity === "SYD") imageFilename = "sydney.jpg";
    }
    
    $("body").css({ "background" : "url(" + "images/" + imageFilename + ") no-repeat center center fixed", 
                    "-webkit-background-size" : "cover",
                    "-moz-background-size" : "cover",
                    "-o-background-size" : "cover",
                    "background-size" : "cover"});
  }
});