alert("i work")

$("button").on("click", function(){
    console.log(this)

    var sin =$(this).attr("data-sin");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
    +sin + 
    "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";    
    $.ajax({
        url:queryURL,
        method:"GET"
})
.then(function(response){
    console.log(response);
    var results=response.data;
    for(var i=0; i< results.length; i++){
        var gifDiv = $("<div>");
        var rating= results[i].rating;
        var p=$("<p>").text("Rating: "+ rating);
        var gifImage= $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);
        gifImage.attr("alt", "img failed to load");
        gifDiv.append(p, gifImage);
        $("#gifs_place").prepend(gifDiv);
    }
    
});
})