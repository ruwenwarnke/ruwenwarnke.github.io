








	
document.getElementById("photography").addEventListener("click", function(){
	

	
	$(document.getElementsByClassName("active")[0]).removeClass("active");
	
	$(document.getElementsByClassName("photography")[0]).addClass("active");
	
	$(document.getElementsByClassName("gifanimation")).removeClass("item").addClass("hide");
	
	$(document.getElementsByClassName("movies")).removeClass("item").addClass("hide");
		
	$(document.getElementsByClassName("photography")).removeClass("hide").addClass("item");
	

});



document.getElementById("gifanimations").addEventListener("click", function(){

	$(document.getElementsByClassName("active")[0]).removeClass("active");
	
	$(document.getElementsByClassName("gifanimation")[0]).addClass("active");
	
	$(document.getElementsByClassName("photography")).removeClass("item").addClass("hide");
	
	$(document.getElementsByClassName("movies")).removeClass("item").addClass("hide");
		
	$(document.getElementsByClassName("gifanimation")).removeClass("hide").addClass("item");



});

document.getElementById("movies").addEventListener("click", function(){

	$(document.getElementsByClassName("active")[0]).removeClass("active");
	
	$(document.getElementsByClassName("movies")[0]).addClass("active");
	
	$(document.getElementsByClassName("photography")).removeClass("item").addClass("hide");
	
	$(document.getElementsByClassName("gifanimation")).removeClass("item").addClass("hide");
		
	$(document.getElementsByClassName("movies")).removeClass("hide").addClass("item");



});