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

    $( "img.materialboxed").each(function( index ) {
        var img = new Image();
        var obj = $(this);
        img.onload = function() {
            var imgw = img.width;
            var imgh = img.height;
            console.log("imgw:" + imgw);
            if(imgw > imgh)
               obj.parent().parent().addClass('p-item-img-h');
            else
               obj.parent().parent().addClass('p-item-img-v');
       }
       img.src = $(this).attr('src');
   });
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85989321-1', 'auto');
ga('send', 'pageview');