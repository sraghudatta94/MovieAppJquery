 	//console.log(movieName);
 	$(document).ready(function() {
 	    $("#searchButton").click(function(event) {
 	        var movieName = document.getElementById("movieName").value;

 	        $.getJSON("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&r=json", function(data) {
 	            if (data.Response == "True") {
 	                $('#para').html('<h1>' + data.Title + '</h1>');
 	                $('#para').append('<h3>Released On : ' + data.Released + '</h3>');
 	                $('#para').append('<h3> Awards: ' + data.Awards + '</h3>');
 	                $('#para').append('<h3> Genre: ' + data.Genre + '</h3>');
 	                $('#para').append('<h3> About Movie: <h4>' + data.Plot + '</h4></h3>');
 	                $('#poster').append('<h4><img src=\"' + data.Poster + '\"<h4>');
 	                if(data.Poster=="N/A"){
 	                	$('#poster').append('<h4> Image Not Found <h4>');
 	                }
 	            } else {
 	                $('#ErrorDiv').html('<h1>' + data.Error + '</h1>');

 	            }
 	        });
 	        $('#poster').empty();
 	        $('#ErrorDiv').empty();
 	        $('#para').empty();


 	    });

 	});