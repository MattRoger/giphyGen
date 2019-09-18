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
    // $("#gifDiv").empty().
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
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
                gifImage.attr("alt", "img failed to load");
                gifDiv.append(p, gifImage);
                $("#gifs_place").prepend(gifDiv);
            }

        });
})

$("#add-sin").on("click", function (event) {
    console.log("click")
    event.preventDefault();
    var sinx = $("#sin-new").val().trim();
    sins.push(sinx);
    renderButtons()
    console.log(sins)
    // $("#sin-num").append(sinNum);      
})
