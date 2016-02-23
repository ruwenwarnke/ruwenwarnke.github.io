








	
document.getElementById("photography").addEventListener("click", function(){
	

	
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("active")[0]).removeClass("active");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("photography")[0]).addClass("active");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("gifanimation")).removeClass("item").addClass("hide");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("movies")).removeClass("item").addClass("hide");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("photography")).removeClass("hide").addClass("item");
	
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("active")[0]).removeClass("active");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("photography")[0]).addClass("active");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("gifanimation")).addClass("hide");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("movies")).addClass("hide");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("photography")).removeClass("hide");

});



document.getElementById("gifanimations").addEventListener("click", function(){

	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("active")[0]).removeClass("active");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("gifanimation")[0]).addClass("active");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("photography")).removeClass("item").addClass("hide");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("movies")).removeClass("item").addClass("hide");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("gifanimation")).removeClass("hide").addClass("item");

	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("active")[0]).removeClass("active");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("gifanimation")[0]).addClass("active");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("photography")).addClass("hide");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("movies")).addClass("hide");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("gifanimation")).removeClass("hide");

});

document.getElementById("movies").addEventListener("click", function(){

	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("active")[0]).removeClass("active");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("movies")[0]).addClass("active");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("photography")).removeClass("item").addClass("hide");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("gifanimation")).removeClass("item").addClass("hide");
	$(document.getElementsByClassName("carousel-inner")[0].getElementsByClassName("movies")).removeClass("hide").addClass("item");

	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("active")[0]).removeClass("active");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("movies")[0]).addClass("active");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("photography")).addClass("hide");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("gifanimation")).addClass("hide");
	$(document.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("movies")).removeClass("hide");


});
