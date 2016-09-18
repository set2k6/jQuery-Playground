$(document).ready(function() {
  "use strict";
  var arr = [1,2,3];
  // returns the entire jQuery object. The '2' is the first item in the array-like object
  console.log("array index #2: ", $(arr).eq(1));

  $(".article--main").each(function(arrayIndex, currentElement) {
    console.log("each article: ", $(currentElement).html());
  });

  $("li").each(function(arrayIndex, currentElement) {
    console.log(arrayIndex);
    console.log("each li: ", $(this).text());
  });

$(".myP").click(function(){
$("p").remove();
});

$("li").hover(
  function() {
    $(this).append($("<span>wing dang doodle</span>"));
  },
  function() {
    $(this).find("span:last").remove();
  }
  );



$("#top-article").append("<h2>.Wassup kids!!</h2>")

  // Select by attribute
  var umbrellaElement = $('h1[name="fred"]');

  // Select specific children
  console.log("the h1: ", $(".container").children("h1"));

  // All the JavaScript that depends on jQuery will be written here

  // Select specific child index (useful for ul/ol)
  // Example of chaining selectors
  console.log("third li: ", $("#letters").children(".letter").eq(2).html());
  console.log("letters id",  $("#letters"));

  // Finding parent DOM elements
  console.log("Index attr: ", $(".album").parents(".song-container").attr("index"));

  // Finding an element
  var album = $(".container").find(".album");
  console.log("album", album.html());

  // Selecting siblings
  var aSibling = $(".a").next();
  var aSibling = $(".b").prev();

  console.log("aSibling: ", aSibling.html()); // like innerHTML

  // Handling events
  // The JS way: document.getElementById("destroyer").addEventListener("click", function)
  $("#destroyer").click(function() { //event listener
    $(".container").toggle();
  });

  // If attaching to a dynamically added element, you must use this syntax
  $(document).on("click", "#destroyer", function() {
    $(".container").toggle();
  });


  $("#firstName").keyup(function() { //event listener
    $(".echo").html($(this).val());
  });

  // An XMLHTTPRequest, in three lines of code. WAT?
  $.ajax({
    url:"./songs.json"
  }).done(functionIWantjQueryToExecute);

  function functionIWantjQueryToExecute(songData) {
    console.log("songs", songData );
    let songs = songData.songs;

    // the original javascript way of looping through the array
    songs.forEach( (song) => { // => is an ES6 shorthand for an anonymous function
      console.log("vanilla song", song.title);
    });

    // Loop through the array with jQuery
    $.each(songs, (key, song) => {
      console.log("jQuery stuff", song.title);
      umbrellaElement.append(`<li>${song.title}</li>`);
    });
  }

  // For fun
  $(document).on("click", "button[id^='button-']", function() {
    $(this).parents(".container").remove();
  });

});