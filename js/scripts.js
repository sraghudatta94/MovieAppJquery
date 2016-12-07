 	//console.log(movieName);
 	$(document).ready(function() {
 	    $("#searchButton").click(function(event) {
 	        var movieName = document.getElementById("movieName").value;
 	function movieCallback(data){
 		if (data.Response == "True") {
 								console.log(data.Search);
 								(data.Search).forEach(function(n){

 									console.log(n.Title);
 $('.gridsection').append('<div class="row"><div class="col-sm-6 col-md-6 col-lg-6" id="poster"><h4><img src=\"' + n.Poster + '\"<h4></div><div class="col-sm-6 col-md-6 col-lg-6" id="para"><h1>' + n.Title + '</h1><h4>Type : ' + n.Type + '</h4><h4>Realeased On : ' + n.Year + '</h4></div></div>');
 					//$('#para').append('<h1>' + n.Title + '</h1>');
 	             //   $('#para').append('<h4>Type : ' + n.Type + '</h4>');
 	               // $('#para').append('<h4>Realeased On : ' + n.Year + '</h4>');
 	               // $('#poster').append('<h4><img src=\"' + n.Poster + '\"<h4>');
 	                if(data.Poster=="N/A"){
 	                	$('#poster').append('<h4> Image Not Found <h4>');
 	                }
 								});

 			//(data.search).forEach(n)
				//	console.log(n);



 			
 	                
 	            } else {
 	                $('#ErrorDiv').html('<h1>' + data.Error + '</h1>');

 	            }
 	            //console.log(data);
 	}
 	$.ajax({
  url: "http://www.omdbapi.com/?s=" + movieName ,//+ "&y=&plot=short&r=json",
  type: 'GET',
  success: movieCallback,
});
 	
 	        $('.gridsection').empty();
 	        

 	    });

 	});

