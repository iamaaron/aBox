//Problem: User when clicking on image goes to a dead end.
//Solution: Create an overlay with the large image - Lightbox.

//Create overlay jQuery object (element).
var $overlay = $("<div id='overlay'></div>");
var $imageContainer = $("<div id='container'></div>");

//Create image jQuery object image (element) to append to overlay.
var $image = $("<img>");

var $caption = $("<p></p>");

var $exit = $("<span id='exit'>X</span>");

$imageContainer.append($image);
$imageContainer.append($caption);



//Append image to overlay.
$overlay.append($imageContainer);
$overlay.append($exit);

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
    $overlay.fadeIn();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
    
  } else {
    
    //Even if anchor element does not have a child <img> element, still prevent HTTP request.
    event.preventDefault();
  }
});

//Hide overlay, image, and caption.
$overlay.click(function(){
  
  //Hide the overlay.
  $(this).fadeOut();
});


  //1.3 Get child's alt attribute and set caption.





