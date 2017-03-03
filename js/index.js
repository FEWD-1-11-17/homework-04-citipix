$(function() {


  //1. listen for submit event on form
  $("#cityForm").submit(function(event) {
    //2. prevent form submission using prevent default
    event.preventDefault();

    //3. fetch value from text field and store in variable 'var city'
    var city = $("#city-type").val();

    //3a. automatically lowercase user input 
    city = city.toLowerCase();
    console.log('city: ' + city);

    //4. check if value has been entered
    //4a. if no value has been entered, display alert with message

    if (city === "") {
      alert('Please enter a city.');
    }

    //5.clear out text field 
    $("#city-type").val("");

    //6. use if else to create scenarios for individual inputs 
    if (city === "nyc" || city === "new york city" || city === "new york") {
      console.log('change background to NYC image');
      //7. use jQuery to change the class in order to change background img
      $("body").attr("class", "nyc");
    } else if (city === "san francisco" || city === "sf" || city === "bay area") {
      console.log('change background to SF image');
      $("body").attr("class", "sf");
    } else if (city === "los angeles" || city === "la" || city === "lax") {
      console.log('change background to LA image');
      $("body").attr("class", "la");
    } else if (city === "austin" || city === "atx") {
      console.log('change background to austin image');
      $("body").attr("class", "austin");
    } else if (city === 'sydney' || city === 'syd') {
      console.log('change background to sydney')
      $("body").attr("class", "sydney");
    } else {
      console.log('no match');
    }

  });


  });

  // // calling a named function in response to the submit event
  // $("#submit-btn").submit(doSomething);

  // function doSomething () {
  //   console.log('doing something');
  // }


  // // calling an anonymous function in response to the submit event
  // $("#submit-btn").submit(function() {
  //     console.log('doing something');
  //   }
  // );
