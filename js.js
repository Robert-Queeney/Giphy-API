"use strict"; 

var topics = ["game of thrones", "dexter", "the simpsons", "the wire", "csi miami", "community", "happy endings", "the walking dead", "king of queens"] 
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
            console.log(response); 
            for (let i = 0; i < response.data.length; i++){
                // appenging the ajax call to the DOM
                const gyphUrl = response.data[i].images.original.url; 
                $('#gyph-place').append(`<img class="theImg" src="${gyphUrl}"/>`); 
                console.log(gyphUrl); 
            }
        
    });
})
     




