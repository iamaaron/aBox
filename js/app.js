//Problem: User when clicking on image goes to a dead end.
//Solution: Create an overlay with the large image - Lightbox.



//Create overlay jQuery object (element).
var $overlay = $("<div id='overlay'></div>");
var $boxContainer = $("<div id='container'></div>");

//Create image jQuery object image (element) to append to overlay.
var $image = $("<img>");

var $caption = $("<p></p>");

var $exit = $("<span id='exit'>X</span>");

$boxContainer.append($image);
$boxContainer.append($caption);
$boxContainer.append($exit);


// Once the overlay is fired but before it is served.
    //Check for alt attribute in element.
    //Create element if alt exists or do not create element.



//Append image to overlay.
$overlay.append($boxContainer);

//Append overlay to document.
$("body").append($overlay);

//Capture the click event on a link to an image.
$("#imageGallery li a").click(function(event){
  if ($(this).has('img').length) {
    
    //Prevent HTTP request.
    event.preventDefault();
    
    //Defining imageLocation variable and grabbing anchor link href value.
    var imageLocation = $(this).attr("href");
    
    //Update overlay with the image linked to the link.
    $image.attr("src", imageLocation);
    
    //Show the overlay.
    $($overlay).slideDown();
    $($boxContainer).delay(400).fadeIn();
    alert($(this).children("img").attr("altTitle"));
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
    
  } else {
    
    //Even if anchor element does not have a child <img> element, still prevent HTTP request.
    event.preventDefault();
  }
});

//Hide overlay, image, and caption.
$exit.click(function(){
  
  //Hide the overlay.
  $($boxContainer).fadeOut();
    $($overlay).delay(400).slideUp();
});


  //1.3 Get child's alt attribute and set caption.





