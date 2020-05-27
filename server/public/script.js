let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;

$("document").ready(function () {
   checkNumbers();
});

function checkNumbers() {
   redCount = $(".red").length;
   $("#redCount").text("Red Count: " + redCount);
   yellowCount = $(".yellow").length;
   $("#yellowCount").text("Yellow Count: " + yellowCount);
   greenCount = $(".green").length;
   $("#greenCount").text("Green Count: " + greenCount);
   blueCount = $(".blue").length;
   $("#blueCount").text("Blue Count: " + blueCount);
}

$("#red").click(function () {
   $(".boxes").append("<div class='red box'></div>");
   $("#redCount").text("Red Count: " + redCount);
   checkNumbers();
});

$("#yellow").click(function () {
   $(".boxes").append("<div class='yellow box'></div>");
   this;
   $("#yellowCount").text("Yellow Count: " + yellowCount);
   checkNumbers();
});

$("#green").click(function () {
   $(".boxes").append("<div class='green box'></div>");
   $("#greenCount").text("Green Count: " + greenCount);
   checkNumbers();
});

$("#blue").click(function () {
   $(".boxes").append("<div class='blue box'></div>");
   $("#blueCount").text("Blue Count: " + blueCount);
   checkNumbers();
});

$(".boxes").on("click", "div.box", function (event) {
   $(this).remove();
   checkNumbers();
});
