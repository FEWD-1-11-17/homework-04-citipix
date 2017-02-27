$(function() {
  var city = 0;

$("#entry").submit(scan);

function scan(event){
  event.preventDefault();

  var string = $("#newentry").val();

  $("#newentry").val("");
}
});