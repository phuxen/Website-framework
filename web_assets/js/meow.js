document.createElement("article");  
document.createElement("footer");  
document.createElement("header");  
document.createElement("hgroup");  
document.createElement("nav");

(function($) {

	var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
	$.highdpi_init = function() {
	    $('img').each(function () {
	        //console.log('highdpi_init');
	        if (pixelRatio > 1) {           
	            var src = $(this).attr("src");
	            $(this).attr("src", src.replace(/(@2x)*.png/i, "@2x.png").replace(/(@2x)*.jpg/i, "@2x.jpg"));
	            $(this).removeClass('replace-2x');
	            console.log('retina');
	        }else{
	            console.log('not retina');
	        }
	    });
	}
})(jQuery);

$(document).ready(function($){	

	// The slider of greatness - BX Slifer	
	/*
	$(function(){
		$('#slider1').bxSlider({
			pager: 		true,
			speed: 		1000,
			easing: 	'easeOutCirc'
		});
	});*/
	
	
	// Random background generator
	/*
	$(function(){
    	bgImageTotal=10;
    	randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
    	imgPath=('../web_assets/img/backgrounds/'+randomNumber+'.jpg');
    	$('body').css('background-image', ('url("'+imgPath+'")'));
	});
	*/
	
	// Box that we have on the top of each slider
	$(".rolloverBox").hover(function() {
	    $(this).fadeTo("slow", 1);
	}, 
	  function () {
	    $(this).fadeTo("slow", 0);
	});
	
	//Fancy box options
	$("a.fancyBoxImg").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'titlePosition'	:	'over',
		'titleShow'		:	false,
		'overlayOpacity':	0.6,
		'overlayColor'	:	'#2b2b2b'
	});
		
	$(function() {
	    var quotes = new Array(
	    "A Fucking Dragon Sandwich",
	    "A Fucking Cheesesteak",
	    "A Fucking Meatball Sub",
	    "Some Fucking Spaghetti",
	    "A Fucking Chicken Carbonara",
	    "Some Fucking Chicken Parm",
	    "A Fucking Pizza",
	    "A Fucking Burrito",
	    "A Fucking Bacon Cheeseburger",
	    "Some Fucking Dumplings",
	    "Some Fucking Dim Sum",
	    "Some Fucking Chipotle Chicken",
	    "Not Fucking Mac And Cheese Because It's Fucking Gross",
	    "Some Fucking Chili",
	    "A Fucking Chicken Bacon Ranch Sandwich",
	    "A Fucking Buffalo Chicken Sandwich",
	    "A Fucking Salad, Fatty!",
	    "Some Fucking General Tsao's Chicken",
	    "Some Fucking Steamed Pork Buns",
	    "Some Fucking Singapore-Style Noodles",
	    "Some Fucking Sweet-and-Sour Chicken",
	    "Some Fucking Sesame Chicken",
	    "Those Fucking Bacon-Wrapped Immitation Crab Meat On a Toothpick Things At The Chinese Buffet",
	    "Some Fucking Meat On A Stick",
	    "A Fucking Fat Sandwich From A Grease Truck At Rutgers",
	    "A Real Fucking Cheesesteak From Fucking Philly",
	    "Some Fucking Pasta Fagioli"),
	    randno = quotes[Math.floor( Math.random() * quotes.length )];
	    $('.quote').text( randno );
	});
	
	// SLIDER AND SHIZ
	$('.iosSlider').iosSlider({		
		scrollbar: true,
		snapToChildren: false,
		desktopClickDrag: true,
		scrollbarLocation: 'top',
		scrollbarMargin: '5px 10px 0 10px',
		scrollbarBorderRadius: 4,
		scrollbarHeight: '5px',
		responsiveSlideWidth: true,
		navSlideSelector: $('.iosSliderButtons .button'),
		infiniteSlider: false,
		onSlideChange: slideContentChange,
		onSlideComplete: slideContentComplete,
		onSliderLoaded: slideContentLoaded
	});
	
	function slideContentChange(args) {
					
		/* indicator */
		$('.iosSliderButtons .button').removeClass('selected');
		$('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
		
	}
	
	function slideContentComplete(args) {
		
	}
	
	function slideContentLoaded(args) {
		
		/* indicator */
		$('.iosSliderButtons .button').removeClass('selected');
		$('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
		
	}
	
	$.highdpi_init();
	
});
