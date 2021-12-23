//this is for forms and validation//
     let email = document.querySelector("input");

        function validate() {
           if(email.value) {
         alert("Thanks! We recieve your message");
         }
       else {
     alert("Please fill up the form..")
   }
 }

 //this is for jquery practice//

 $('.hot-stuff').hide();

    
 setTimeout(()=>{
     $('.hot-stuff').fadeIn();
     $('.hot-stuff').addClass('complete')
 },1500);

 
 setTimeout(()=>{
     $('.disappear').hide();
 },1500)

 $('.hot-stuff').click(()=> { 
     $('.hot-stuff').hide();  
 });


 //Debugging and error//
        function checkValidate(){
           try {
              val=parseInt(document.getElementById("isValidinput").value);//get value message
                 if (isNaN(document.getElementById("isValidinput").value) == true) {
                throw "Error1";
                }
               document.getElementById("isValidMsg").innerHTML="";
            if (val>15)
           {
         document.getElementById("isValidMsg").innerHTML="it is too high";
       }
    else if(val<12)
       {
           document.getElementById("isValidMsg").innerHTML="it is too low";
        }
             else if(document.getElementById("isValidinput").value==='')
       {
               document.getElementById("isValidMsg").innerHTML="is empty";
         }
                   else
          {
                     document.getElementById("isValidMsg").innerHTML="This will always run";
           }
           }
                 catch(err) {
               if(err=="Error1")//make this catch for invalid entry
             { document.getElementById("isValidMsg").innerHTML = "is not a number";}
           }
         }

//HTML DOM innerHTML Property//
   
   function myFunction3() {
    document.getElementById("demo").innerHTML = "Javascript is fun!";
  }

//Variables and Data Types//
//for slides//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Functions : this is for the text and paragraph change//
function myFunction1() {
  var x = document.getElementById("text");
  x.style.color = "blue";
  }
  //Use getElementById
  //When a button is pressed, the function will change the content to any text you like.
  
  function myFunction2() {
  document.getElementById("text").textContent = "Paragraph Changed!";
  }

  
//Use an alert function
//When a button is pressed, the function will display the current background color on the page in an id element.

function myFunction() {
  document.body.style.backgroundColor = "gray";
  alert("The background will change to gray");
  document.getElementById("demo").innerHTML = "This a gray background";
}

//get location

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
//Do/While loops

function myFunction4() {
  var text = "";
  var i = 0;
  do {
    text += "<br>The number is " + i;
    i++;
  }
  while (i < 5);
  document.getElementById("demo").innerHTML = text;
}