
/*=========Responsive Navbar===========*/
function myFunction(){
var x = document.getElementById("myNav");
      if(x.className === "navbar") {
		  x.className += " responsive" ;
	  } else {
		  x.className = "navbar";
	  }
}

/*============Form Validation===========*/
let validateTextbox = () => {
	let validateName1 = document.forms["myForm"]["firstname"]; 
	let validateName2 = document.forms["myForm"]["lastname"]; 
    let validateFirstPassword = document.forms["myForm"]["password1"];
    let validateSecondPassword = document.forms["myForm"]["password2"];
    let validateEmail = document.forms["myForm"]["email"];
    let validateUserName = document.forms["myForm"]["username"];
    let validateCountry = document.forms["myForm"]["country"];

    if(validateName1.value == ""){
    	alert('Please enter your First Name');
    	validateName1.focus();
    	return false;
    }
    if(validateName2.value == ""){
    	alert('Please enter your Last Name');
    	validateName2.focus();
    	return false;
    }
    if(validateFirstPassword.value.length < 10 || validateSecondPassword.value.length < 10 || validateFirstPassword.value !== validateSecondPassword.value){
    	alert("Password must be atleast 10 characters long and should be same");
    	validateFirstPassword.focus();
    	validateSecondPassword.focus();
    	return false;
    }
    if(validateEmail.value==""){
    	alert("Please enter a valid e-mail address.");
        validateEmail.focus();
        return false;
    }
    if (validateEmail.value.indexOf("@", 0) < 0){
        alert("Please enter a valid e-mail address.");
        validateEmail.focus();
        return false;
    }
  
    if (validateEmail.value.indexOf(".", 0) < 0){
        alert("Please enter a valid e-mail address.");
        validateEmail.focus();
        return false;
    }
    if(validateUserName.value==null || validateUserName.value=="" || validateUserName.value.length > 6){
    	alert('Your User Name Should be less than 7 Characters');
    	validateUserName.focus();
    	return false;
    }
}