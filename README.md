# 7 Deadly Sins giphyGen :smiling_imp:
This is page searches giphy and displays the results

## Motivation
Click on a button with a sin in it and the page will search the giphy api for that search term using ajax. The page will display 10 paused gifs. To play a gif, simply click on it, to pause it, click again.

You can also create a sin using the input field. Simply type the sin you want and a button with that sin will appear. Click on the button to see the search results

The goal of this project is to demonstrate usage of javascript functions to call and display an api's search results.


## Build Status
complete

## Tech/framework used
* JavaScript 
* jQuery 
* gify api

## Code style

#### Heading Title

Html
```html
<h1><span id="sinnum"></span>Deadly Sins</h1>
```
JavaScript
 ```javascript
 // sin array is the starting array
var sins = ["pride", "greed", "wrath", "lust", "envy", "sloth", "Wrath"]
// Used to increase the number of sins in the heading
var sinNum = sins.length;
$("#sinnum").text(sinNum)
 ```
#### Render Buttons Function
This function creates the buttons for each sin
```JavaScript
function renderButtons() {
    $("#buttons").empty()
    for (var i = 0; i < sins.length; i++) {
        var button = $("<button>");
        button.text(sins[i])
        button.attr("data-sin", sins[i])
        $("#buttons").append(button)
    }
}
```
How the buttons work
```javascript
$("#buttons").on("click", "button", function () {
    $("#gifs_place").empty();
    console.log(this)
    var sin = $(this).attr("data-sin");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="
        + sin + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                gifDiv.addClass("gifimg");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>").attr("data-state", "still").attr("data-animate", results[i].images.fixed_height.url).attr("data-still", results[i].images.fixed_height_still.url)
                gifImage.attr("src", results[i].images.fixed_height_still.url);               
                gifImage.attr("alt", "img failed to load");
                gifDiv.append(p, gifImage);
                $("#gifs_place").prepend(gifDiv);                
            }            
        });
    })
```
How the seach bar works to add a sin
```javascript
$("#add-sin").on("click", function (event) {
        console.log("click")
        event.preventDefault();
    var sinx = $("#sin-new").val().trim();
    sins.push(sinx);
    renderButtons()
    console.log(sins)
    $("#sin-new").val("Add A Sin")
    sinNum++;   
    $("#sinnum").empty().text(sinNum);      
})
```
How The gifs play
```javascript
    $("#gifs_place").on("click", "img", function () {
        var state = $(this).attr("data-state");
            var stillURL = $(this).attr("data-still");    
        var animateURL = $(this).attr("data-animate")    
        if (state === "still") {
            $(this).attr({
                "src": animateURL,
                "data-state": "animate"
            });    
        } else {
            $(this).attr({
                "src": stillURL,
                "data-state": "still"
            })    
        };    
    })
```

## Features
Each time a new sin is added, the header goes up by one.

## Installation
* :trident: Fork it
* :sheep: Clone it


## API Reference
[Giphy](https://developers.giphy.com/)

## How to use?
Add a sin, then click on the button. To get a gif to play or stop simply click on it.

## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/


## License
