let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
// write your for loop here
    for (var mhorror of horror) {
    $(".horror-recommend").append("<p>"+ mhorror);
    }   
});

//declare your new array here
let action = ["Men in Black", "Bad Boys", "Fast and Furious"];

$(".action").click(function() {
    for (var maction of action) {
    $(".action-recommend").append("<p>" + maction);
    }
});

let comedy = ["Neighbors", "Paul Blart The Mall Cop", "Wold of Wall Street"];

$(".comedy").click(function() {
    for (var mcomedy of comedy) {
    $(".comedy-recommend").append("<p>" + mcomedy);
    }
});