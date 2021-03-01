$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInRight')) {
  		$('.timeline-content').removeClass('js--fadeInLeft');
		$('.timeline-content').removeClass('js--fadeInRight');
  	}


  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300',
	    easing: 'ease-in-out',
	    duration: 400,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '0',
		  easing: 'ease-in-out',
	    duration: 400,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '0',
	    easing: 'ease-in-out',
	    duration: 400,
	  });

  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 400,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 400,
	  });


});