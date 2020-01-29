// JavaScript Document

function remove(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}


function filter() {
var dollarCheck=document.getElementById("dollarCheck");
var bahadurCheck=document.getElementById("bahadurCheck");
var duxCheck=document.getElementById("duxCheck");
var goldfishCheck=document.getElementById("goldfishCheck");	
var dollar=document.getElementById("dollar");
var dollar1=document.getElementById("dollar1");
var dollar2=document.getElementById("dollar2");
var bahadur=document.getElementById("bahadur");
var bahadur1=document.getElementById("bahadur1");
var dux=document.getElementById("dux");
var goldfish=document.getElementById("goldfish");
var goldfish1=document.getElementById("goldfish1");

	if (dollarCheck.checked == false) {
		
		dollar.style.display = "none";
		dollar1.style.display = "none";
		dollar2.style.display = "none";
		}
		
			if (goldfishCheck.checked == false) {
		
		goldfish.style.display = "none";
		goldfish1.style.display = "none";
		
		
		}
			if (bahadurCheck.checked == false) {
		
		bahadur.style.display = "none";
		bahadur1.style.display = "none";
		
		}
			if (duxCheck.checked == false) {
		
		dux.style.display = "none";
		
		}
		
		
		
		
		
		
		
		
		
		
		if (dollarCheck.checked == true) {
		
		dollar.style.display = "block";
		dollar1.style.display = "block";
		dollar2.style.display = "block";
		}
		
			if (goldfishCheck.checked == true) {
		
		goldfish.style.display = "block";
		goldfish1.style.display = "block";
		
		
		}
			if (bahadurCheck.checked == true) {
		
		bahadur.style.display = "block";
		bahadur1.style.display = "block";
		
		}
			if (duxCheck.checked == true) {
		
		dux.style.display = "block";
		
		}
		
		
		alert("Filter applied!");
		
		
	
	
	
}


function addtocart() {
	alert("Product Added To Cart");
}




// contact us form validation script starts from here 



	
var msgBoxStyle = document.getElementById("message-box").style;
var msg = document.getElementById("message").innerHTML ="";
	
	
 var name = document.getElementById("name").value;
/* var email = document.getElementById("email").value;
 var phone = document.getElementById("phone").value;
 var message = document.getElementById("message").value;*/
 
 var nameLength = name.length; 
 
 
 	/*function for name starts here*/
	
	function nameCheck() {
		var msgBoxStyle = document.getElementById("message-box").style;
		var msg1 = document.getElementById("message1");
		var name = document.getElementById("name").value;
		var nameLength = name.length; 
		 
		 
		if(nameLength<20){
		
		 msgBoxStyle.display = "none";
		 
		 }
	  
	 if(nameLength>20){
		
		 msgBoxStyle.display = "block";
		 msg1.innerHTML = "Name Should Be Less Than 20 Characters."
		 }
	 
	 
	 }
	 
	 /*function for name ends here*/
	 
	 
	 /*function for email starts here*/
	 
	 function emailCheck() {
		var msgBoxStyle = document.getElementById("message-box").style;
		var msg2 = document.getElementById("message2");
		var email = document.getElementById("email").value;
		
		var searchForAt = email.search("@");
		
		if (searchForAt>-1){
			msgBoxStyle.display = "none";
			msg2.innerHTML="Invalid Email";
			
			
			}
		
		if (searchForAt==-1){
			msgBoxStyle.display = "block";
			msg2.innerHTML="Invalid Email";
			
			
			}
			
		var searchForDomain = email.substring(searchForAt+1); 
		
		if (searchForDomain == "yahoo.com" || searchForDomain == "gmail.com" || searchForDomain == "hotmail.com" ||searchForDomain == "outlook.com") {
			msgBoxStyle.display = "none";
		} else {
			msgBoxStyle.display = "block";
			msg2.innerHTML="Invalid Email";
		}
		
		 
		
	 
	 }
	 
	 /*function for email ends here*/
	 
	 
	  /*function for phone starts here*/
	 
	 function phoneCheck() {
		 
		var msgBoxStyle = document.getElementById("message-box").style;
		var msg3 = document.getElementById("message3");
		var phone = document.getElementById("phone").value;
		
		
		var searchForCode = phone.substr(0, 2);
		var lengthOfPhone = phone.length;
		
		
	
		
		
		if (searchForCode=="03" && lengthOfPhone==11 ){
			msgBoxStyle.display = "none";
			
		} else {
			msgBoxStyle.display = "block";
			msg3.innerHTML="Should be equal to 11 characters & start with '03'";
		} 
		
		
		
		
		 
		
	 
	 }
	 
	 /*function for phone ends here*/
