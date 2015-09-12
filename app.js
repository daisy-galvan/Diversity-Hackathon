/**
 * Created by daisyg on 9/12/15.
 */


$("#sleep-later").addClass("animated shake")

//
//setTimeout(function() {
//    alert("hey");
//
//}, 5000);


$(".time-selectors a").on("click", function(event) {
    event.preventDefault();
    var when = parseInt($(this).data("value"), 10) * 60 * 1000;

    setTimeout(function() {
        $('#trigger').get(0).play();
    }, when);
});
