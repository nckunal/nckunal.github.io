
/*==============For responsive navbar================*/
function myFunction(){
var x = document.getElementById("myNav");
      if(x.className === "navbar") {
		  x.className += " responsive" ;
	  } else {
		  x.className = "navbar";
	  }
}

/*=======================Active Link=========================*/
var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
		
	});
}	



/*=============================For Sidenav==========================*/

/*==============Open when someone clicks on the span element=====================*/
function openNav() {
    document.getElementById("myNav1").style.width = "100%";
}

/*========Close when someone clicks on the "x" symbol inside the overlay=================== */
function closeNav() {
    document.getElementById("myNav1").style.width = "0%";
}

/*========================for Image Slider IN MAIN-PROJECT PART 1=============================*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
	  
	  