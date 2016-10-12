$(document).ready(function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
    // $('.materialboxed').parent().removeClass('material-placeholder');
    updateImgs();
});

$(window).on("load", function() {
    updateImgs();
});

function updateImgs () {
	var cw = $('.p-item-img').width();
    $('.p-item-img').css('height', cw + 'px');
    console.log('w: ' + cw);
    // $('.p-item-img-h img').css('height', cw + 'px');

    $( ".p-item-img").each(function( index ) {
    	var img = $(this).find('img')[0];
    	var imgw = img.clientWidth;
    	var imgh = img.clientHeight;
    	if(imgw > imgh)
    		$(this).addClass('p-item-img-h');
    	else
    		$(this).addClass('p-item-img-v');
    });
}