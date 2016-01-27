function Ticket(type, time, movie) {
  this.type = type;
  this.time = time;
  this.movie = movie;
  // this.price = [];
}

function Price(movieVal, typeVal, timeVal) {

   this.movieVal = movieVal;
   this.typeVal = typeVal;
   this.timeVal = timeVal;
 }

 Price.prototype.fullPrice = function() {

   var price = this.movieVal + this.typeVal + this.timeVal;

   return "$" + price + ".00";
 }

 Ticket.prototype.fullTicket = function() {
   return this.type + " at " + this.time + " for " + this.movie;
 }

function resetFields() {
  $("input#newType").val("");
  $("input#newTime").val("");
  $("input.newMovie").val("");
}

$(document).ready(function() {
  $("form#movie-ticket").submit(function(event) {
    debugger;

    var inputtedType = $(".type option:selected").text();
    var inputtedTime = $(".time option:selected").text();
    var inputtedMovie = $(".movie option:selected").text();
    var newTicket = new Ticket(inputtedType, inputtedTime, inputtedMovie);

    var movieVal = parseInt($(".movie option:selected").val());
    var typeVal = parseInt($(".type option:selected").val());
    var timeVal = parseInt($(".time option:selected").val());
    var newPrice = new Price(movieVal, typeVal, timeVal);

      // $("#postAddress").hide();
  //  $('#postAddress').not(this).hide();

    $("div#ticket").text("One " newTicket.fullTicket() + ". Your total is: " +  newPrice.fullPrice());

    resetFields();
    event.preventDefault();
  });
});
