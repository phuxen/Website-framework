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
	$(function(){
		$('#slider1').bxSlider({
			pager: 		true,
			speed: 		1000,
			easing: 	'easeOutCirc'
		});
	});
	
	$.highdpi_init();
	
	$(function(){
    	bgImageTotal=10;
    	randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
    	imgPath=('../web_assets/img/'+randomNumber+'.jpg');
    	$('body').css('background-image', ('url("'+imgPath+'")'));
	});
	
});
