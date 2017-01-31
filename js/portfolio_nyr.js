$(document).ready(function(){
	$('.materialboxed').materialbox();
	updateUrls();
});

function updateUrls() {
  var page_list = ['visual_odometry.html', 'apriltag.html', 'wifi_car.html', 'pokemon.html', 'pano.html', 'poker.html', 'water_test.html', 'hack_north.html', 'smart_pos.html', 'wedine.html', '2014.html', '2015.html', '2016.html'];
  var page_name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  // console.log(page_name);

  var index = page_list.indexOf(page_name);
  if((index - 1) >= 0)
    $('.nav-left').attr('href', page_list[index - 1]);
  else
    $('.nav-left').remove();

  if((index + 1) <= page_list.length)
    $('.nav-right').attr('href', page_list[index + 1]);
  else
    $('.nav-right').remove();

}


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85989321-1', 'auto');
ga('send', 'pageview');