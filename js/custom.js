/*
  Author: Vlad Karpov
  Template: Woodworks (Landing Page)
  Version: 1.0.0
  FileName: custom.js
  URL: http://themeforest.net/user/Vladuha/portfolio
  Support: http://themeforest.net/user/Vladuha#contact
*/

// -------------------------------------------
// -------- LightBox for screenshots ---------
// -------------------------------------------

// Using strict mode for modern Browsers
"use strict";


$(function(){

  var $overlay = $('<div class ="overlay"></div>'),
      $image = $("<img>")

  $overlay.append($image);

  $('body').append($overlay)  

  $('#screenshots-carousel a').on('click', function(event) {
      event.preventDefault();
      var imageLocation = $(this).attr("href");
      var currentImage = $image.attr("src", imageLocation);
      $overlay.show();
    
      currentImage.on('click', function() {
        $overlay.hide();
      });
  })

  $overlay.on('click', function() {
    $overlay.hide();
  })

});

// -----------------------------------------------
// -------- Smooth scrolling to position ---------
// -----------------------------------------------

$(function(){
  
  $('#navigation .nav a, #descr .btn-fill, .logo-footer, .nextfeature').on('click', function(e){
    e.preventDefault();      
    var scrolldiv = $(this).attr('href');   
    var menuHeight = $('#navigation').height();

    switch (scrolldiv) {
      case "#allfeatures":
      case "#video":
      case "#contact":
        $(scrolldiv).animatescroll({padding:menuHeight})
        break
      case "#screenshots":
        $(scrolldiv).animatescroll({padding:menuHeight + 100})
        break
      default: 
        $(scrolldiv).animatescroll();
    };  
  });

});

// ---------------------------------
// -------- Document ready ---------
// ---------------------------------

$(function(){

// Check if document wider than 768px
// if so, then apply function navSticky();

	var width = $(window).width();
	if (width >= 768) {
		navSticky();
	};

// Check if viewport greater or equal 1025px
// if so, then apply function phoneSail();
// else, disable phoneSail(); function

	if (width <= 1024) {
    $("#phone").hide();
	}
	else {
    phoneSail();  
	};

// -----------------------------------------
// -------- Phone Sailing Function ---------
// -----------------------------------------

function phoneSail() {

var pageNameId = new Array;
$('[id*=page]').each(function() {
  pageNameId.push($(this).attr('id'));  
});

var feature_img_path = 'img/feature_images/';
var featureImg = ['test-1.jpg','test-2.jpg','test-3.jpg'];

$(window).on("scroll resize", function(){
    var pos = $('#trigger').offset();
    $('[id*=page]').each(function(index){
        if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top && $(this).is('#page-' + index)) {
            var imagego = $(".bu").attr("src", feature_img_path + featureImg[index]);
          }
    });
});

$(window).on("resize", function(){
  width = $(window).width();
    if (width <= 1024) {
    $("#phone").hide();
    $('#' + pageNameId[0]).waypoint('disable');
    $('#' + pageNameId[pageNameId.length-1]).waypoint('disable');
  }
  else {
    $("#phone").show();  
  };
});

//waypoints
 $("#phone").hide();
  $('#' + pageNameId[0]).waypoint(function(direction) {

     if (direction == "down") {
       $("#phone").fadeIn( 300 );        
     }
     else if(direction == "up") {
     $("#phone").fadeOut( 300 );
     }
   }, { offset: 300 });

$('#' + pageNameId[pageNameId.length-1]).waypoint(function(direction) {      
     if (direction === "down") {
       $("#phone").fadeOut( 300 );
     }
     else if(direction === "up") {
       $("#phone").fadeIn( 300 ); 
     };

   }, { offset: -400 });


}; //end of phoneSail

// -------------------------------------------------------------------
// -------- Function which is responsible for the navigation ---------
// -------------------------------------------------------------------

	  function navSticky() {

		var stickyNavTop
		// get a distance to nav from top for a first launch
		if (typeof stickyNavTop == 'undefined') {
			stickyNavTop = $('.navbar').offset().top;
		};


		$(window).scroll(function() {  
			var scrollTop = $(window).scrollTop();  
			       
			if (scrollTop > stickyNavTop) {   
				$('#navigation').removeClass('navbar').addClass('navbar-sticky');  
			} 
			else {  
				$('#navigation').addClass('navbar').removeClass('navbar-sticky'); 
			};   

		});


		var delay = (function(){
			var timer = 0;
			return function(callback, ms){
				clearTimeout (timer);
				timer = setTimeout(callback, ms);
			};
		})();

		$(window).resize(function() {
		    delay(function(){

				var isNavFixed = $('#navigation').hasClass('navbar-sticky');

				if (isNavFixed) {
					$('#navigation').addClass('navbar').removeClass('navbar-sticky'); 
					stickyNavTop = $('.navbar').offset().top;
					$('#navigation').removeClass('navbar').addClass('navbar-sticky');
				}
				else {
						stickyNavTop = $('.navbar').offset().top;
					};
		    }, 500);
		});
	};	

}); //end document ready function

// ---------------------------------------
// -------- Screenshots Carousel ---------
// ---------------------------------------

$(document).ready(function() {
 
  $("#screenshots-carousel").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false
  });

  $("#testimonial-carousel").owlCarousel({
    items : 1,
    autoPlay : true,
    stopOnHover : true,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false
  });
 
});

// -------------------------------
// -------- Contact form ---------
// -------------------------------

$("#contact").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: dataString,
            success: function () {
              $('.notify').text('Message was sent successfully').css("color", "#69CF7E");
              $('.notify').fadeOut();
              $('.notify').fadeIn();
              $('#contact button').text('Thank you!').attr('disabled', true);
            }
        });
    } else {
        $('.notify').text('Enter valid e-mail and message that must be longer than one character.').css("color", "#E57272");
        $('.notify').fadeOut();
        $('.notify').fadeIn();
    }

    return false;
});

// ---------------------------------
// -------- Subscribe form ---------
// ---------------------------------

$("#subscribe-form").submit(function (e) {
    e.preventDefault();
    var email = $("#subscriber-email").val();
    var dataString = 'email=' + email;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email)) {
        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: dataString,
            success: function () {
                $('.subscribe-message').text('Thank you! We will notify you once it launch.');
                $('.subscribe-message').fadeOut();
                $('.subscribe-message').fadeIn();
            }
        });
    } else {
        $('.subscribe-message').text('You need to enter proper email address');
        $('.subscribe-message').fadeOut();
        $('.subscribe-message').fadeIn();
        $('.subscription-error').fadeIn(1000);
    }

    return false;
});