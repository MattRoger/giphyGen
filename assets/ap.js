// var sin;
var sins = ["pride", "greed", "wrath", "lust", "envy", "sloth"]
// var button;
var sinNum = sins.length + 1;
// $("#sinnum").append(sinNum)


renderButtons()

function renderButtons() {
    $("#buttons").empty()
    for (var i = 0; i < sins.length; i++) {
        var button = $("<button>");
        button.text(sins[i])
        button.attr("data-sin", sins[i])
        $("#buttons").append(button)
        $("#sinnum").text(sinNum)
    }
}

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
                // gifImage.attr("data-state","animated", );
                
                // gifImage.attr("data-state","still", results[i].images.fixed_height_still.url);
                
                

                gifImage.attr("alt", "img failed to load");
                gifDiv.append(p, gifImage);
                $("#gifs_place").prepend(gifDiv);
                
            }
            
        });
    })
    $("#gifs_place").on("click", "img", function () {
        var state = $(this).attr("data-state");
    
    
        var stillURL = $(this).attr("data-still");
        // var stillURL=$(this).attr("src", results[i].images.fixed_height_still.url);
    
        var animateURL = $(this).attr("data-animate")
        // var animateURL=$(this).attr("src", results[i].images.fixed_height.url)
    
    
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
    
    $("#add-sin").on("click", function (event) {
        console.log("click")
        event.preventDefault();
    var sinx = $("#sin-new").val().trim();
    sins.push(sinx);
    renderButtons()
    console.log(sins)
    $("#sin-new").val("Add A Sin")
    // $("#sin-num").append(sinNum);      
})

