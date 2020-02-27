# 7 Deadly Sins giphyGen :smiling_imp:
This is page searches the Giphy API for gifs. The Page starts out with a button for each of the 7 deadly sins listed as buttons. Each time the user adds a sin, it creats a button. The gifs start paused, and click from the user will play them.

[See The App Live](https://mattroger.github.io/giphyGen/)

## Motivation
This project uses JavaScript ajax calls to an Giphy API to retrieve gifs using the search term labled on each button.


## How To Use
Click on a button with a sin in it and the page will search the Giphy API for that search term. The page will display 10 paused gifs. To play a gif, simply click on it, to pause it, click again.

You can also create a sin using the input field. Simply type the sin you want and a button with that sin will appear. Click on the button to see the search results

## Build Status
complete :checkered_flag:

## Tech/framework used
* JavaScript 
* jQuery 
* Gify API

## Features
Each time a new sin is added, the header goes up by one.

## Code style

### Choosing a sin and starting and stoping the gif
![basic demo](https://github.com/MattRoger/screenshots/blob/master/giphy/GiphyGeneratorDemo.gif?raw=true)

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
      https://github.com/MattRoger/screenshots/blob/master/giphy/searchDemo.gif?raw=true      });    
        } else {
            $(this).attr({
                "src": stillURL,
                "data-state": "still"
            })    
        };    
    })
```
### Adding your own sins
![searchdemo](https://github.com/MattRoger/screenshots/blob/master/giphy/searchDemo.gif?raw=true)

How the search bar works to add a sin
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
