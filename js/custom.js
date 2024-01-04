/********************************************
			Services Section
			"Document dot Ready method"
*******************************************/
$(function(){
	//animate while scrolling
	new WOW().init();
});

/********************************************
			Work Method 
			(Pop up image selection)
*******************************************/
$(function(){
	$("#work").magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
 		type: 'image',  // other options
 		
 		gallery:{
    	enabled:true	//'Gallery' objects enables to see picctures one by one like galllery
  			}
	});
});

/********************************************
			Team Section
*******************************************/
$(function(){
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		mouseDrag: true,
		smartSpeed: 699,
		loop: true,
		autoplayHoverPause: true, 
	});
});


/********************************************
			TESTIMONIAL SECTION
*******************************************/
$(function(){
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		mouseDrag: true,
		smartSpeed: 699,
		loop: true,
		autoplayHoverPause: true, 
	});
});

/********************************************
			FORM VALIDATION
*******************************************/
function validation(){
	var first_name = document.getElementById("first-name").value;
	//var last_name = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var error_msg = document.getElementById("error_msg");
	error_msg.style.padding = "5px";
	var reqObj = {"name":first_name,
				  "email":email,
				"phone":phone,
				"message":message};


	

	

	var text;

	if(first_name < 2){
		text = "Please Enter A Valid  Name";
		error_msg.innerHTML = text;
		return false;
	}
	/*if(last_name < 4){
		text = "Please Enter A Valid Last Name";
		error_msg.innerHTML = text;
		return false;
	}*/
	if(email.indexOf("@") == -1 || email.length <6){
		text = "Please Enter A Valid Email Address";
		error_msg.innerHTML = text;
		return false;
	}
	if(isNaN(phone) || phone.length != 10){
		text = "Please Enter A Valid Phone Number";
		error_msg.innerHTML = text;
		return false;
	}
	if(message <= 15){
		text = "Please Enter More Than 15 Characters";
		error_msg.innerHTML = text;
		return false;
	}
	/*$.post("https://dydb.onrender.com/message/add",reqObj,	function(result){
		console.log(result);
		document.getElementById("myForm").reset();
		alert("Form Submitted Successfully");
	},"json");*/

	$.ajax({
		url: "https://dydb.onrender.com/message/add",
		type: "POST",
		crossDomain: true,
		data: JSON.stringify(reqObj),
		dataType: "json",
		beforeSend: function(xhr){xhr.setRequestHeader("Content-Type","application/json");},
		success: function (response) {
			console.log(response);
		},
		error: function (xhr, status) {
			alert("error");
		}
	});

	
	return true;

};