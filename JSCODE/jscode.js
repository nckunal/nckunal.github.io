
/*===============For opening and closing of sidenav================*/
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


/*===================For Dropdown Menu====================*/
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
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