"use strict"; 

var topics = ["game of thrones", "dexter", "the simpsons", "the wire", "csi miami", "community", "happy endings", "the walking dead", "broad city"] 
// console.log(topics); 



// creating buttons from the array
window.onload= function () {
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>"); 
        a.attr('data-name', topics[i]); 
        a.text(topics[i]); 
        a.attr('id', 'butt'); 
        $("#button-place").append(a); 

    }}; 

        

// creating new buttons when a search is performed
$('#submit-button').on("click", function(event){
        event.preventDefault(); 
        var searchField = $("#search-input").val()
        var a = $("<button>"); 
        a.attr('data-name', searchField);
        a.attr('id', 'butt'); 
        a.text(searchField); 
        $("#button-place").append(a); 


        
})

// making the ajax call when a button is clicked
   
$(document).on("click", "#button-place",  function(event) {
    var searchText = $(event.target).text()
    var queryURL = `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=0PQbe7T3TcjDCI5KA7ZAcbqmxUE7LSnD`;
// clead out the giphs before making the ajax call
    $("#gyph-place").empty(); 
    $.ajax({
        url:queryURL,
        method: "GET"
        }).then(function(response){
            for (let i = 0; i < 11; i++){
                // appenging the ajax call to the DOM
                const movieRating = response.data[i].rating; 
                const gyphUrl = response.data[i].images.original.url; 
                const gyphStill = response.data[i].images.original_still.url; 
                $('#gyph-place').append(`<div id=gifWrapper${i} class=""d-flex flex-wrap"/>`);
                    $(`#gifWrapper${i}`).append(
                        ` <input type="image" class="theImg" src="${gyphStill}" data-still="${gyphStill}" data-animate="${gyphUrl}" data-state="still"/>
                        <p class="rating">Rating =${movieRating}</p>`
                );

            }
        
    });

    // making the gis pause and go
    // not quite working has all the elements, but is is not changing the attr on click

    $(document).on("click", ".theImg", function() {

        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
       
        
      });
  
})
     




