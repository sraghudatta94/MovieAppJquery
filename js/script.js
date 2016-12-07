 	//console.log(movieName);
 	$(document).ready(function() {
 	    $("#searchButton").click(function(event) {
 	        var movieName = document.getElementById("movieName").value;
 	function movieCallback(data){
 		if (data.Response == "True") {
 	                $('#para').html('<h1>' + data.Title + '</h1>');
 	                $('#para').append('<h4>Released On : ' + data.Released + '</h4>');
 	                $('#para').append('<h4>Language : ' + data.Language + '</h4>');
 	                $('#para').append('<h4>Actors : ' + data.Actors + '</h4>');
 	                $('#para').append('<h4> Awards: ' + data.Awards + '</h4>');
 	                $('#para').append('<h4> Genre: ' + data.Genre + '</h4>');
 	                $('#para').append('<h4> About Movie: <h5>' + data.Plot + '</h5></h4>');
 	                $('#poster').append('<h4><img src=\"' + data.Poster + '\"<h4>');
 	                if(data.Poster=="N/A"){
 	                	$('#poster').append('<h4> Image Not Found <h4>');
 	                }
 	            } else {
 	                $('#ErrorDiv').html('<h1>' + data.Error + '</h1>');

 	            }
 	            console.log(data);
 	}
 	$.ajax({
  url: "http://www.omdbapi.com/?s=" + movieName ,//+ "&y=&plot=short&r=json",
  type: 'GET',
  success: movieCallback,
});
 	
 	        $('#poster').empty();
 	        $('#ErrorDiv').empty();
 	        $('#para').empty();


 	    });

 	});

