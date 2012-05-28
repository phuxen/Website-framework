document.createElement("article");  
document.createElement("footer");  
document.createElement("header");  
document.createElement("hgroup");  
document.createElement("nav");

$(function () {
    var tabContainers = $('.tabContent');
    $('ul.sideNav a').click(function () {
        tabContainers.hide().filter(this.hash).show();
        
        $('ul.sideNav a').removeClass('selected');
        $(this).addClass('selected');
        
        return false;
    }).filter(':first').click();
    
    $('.faceInner').append($.gravatar('phuxen@gmail.com', {size: 250}));
    
    //603015
    
    /*$(".instagram").instagram({
    	show : 		5,
    	userId:		603015,
    	clientId: 	'9edb71a8e03e4fcaa0639f09d725d9bd'
	});*/
	
	$(".instagram").instagram('getStream', {
		count: 8,
		user: 603015
	});
});