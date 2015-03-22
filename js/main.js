window.onload = function(){
	// Logo Colors
	$('header svg path[fill="#606D80"]').attr('fill','#DCE0E6');
	$('footer svg path[fill="#606D80"]').attr('fill','#DCE0E6');
	$('header svg path[fill="#2B4C7E"]').attr('fill','#567EBB');
	$('footer svg path[fill="#2B4C7E"]').attr('fill','#567EBB');

	// Login Fail Modal Check
	if($('.modal .loginmsg').text() != '' && $('.modal .loginmsg').text() != 'Login success'){
		$('#login-modal').modal('show');
	}
	$('.forgot').click(function(){
		$('#login-modal').modal('hide');
	});


	// NAV
	function navCheck(){
		var docWidth = $(document).width();
		if(docWidth < 995){
			$('nav.lg').hide();
			$('nav.sm').show();
			navHider();
		}else{
			$('nav.sm').hide();
			$('nav.lg').show();
		}
	}
	navCheck();

	var w = $('nav.sm ul.menu').width() + 20;
	function navHider(){
		w = $('nav.sm ul.menu').width() + 20;
		$('nav.sm').css({
			'margin-right':'-'+w+'px'
		});
	}

	$('nav.sm .nav-flag').click(function(){
		if($('nav.sm').hasClass('in')){
			$('nav.sm').css({
				'margin-right':'-'+w+'px'
			});
			$('nav.sm').addClass('out');
			$('nav.sm').removeClass('in');
		}else{
			$('nav.sm').css({
				'margin-right': '0px'
			});
			$('nav.sm').addClass('in');
			$('nav.sm').removeClass('out');
		}
	});

	/////////////////////// DASH SIDE NAV
	/////////////////////////////////////
	var footerTop = $('footer').position().top;
	var dashNavTop = $('#dash aside').offset();
	var dashNavHeight = $('#dash aside').height();
	var screenHeight = $(window).height();
	var footerHeight = $('footer').height();
	var heightMin = screenHeight - footerHeight;
	var catcher = footerTop - heightMin + 6;
	var screenTop = '';
	var dashNavLock = footerTop - dashNavHeight - footerHeight - 47;

	function windowTop(){
		screenTop = $(window).scrollTop();

		if(screenTop >= catcher){
			$('#dash aside').css({
				'position': 'absolute',
				'transition':'top .5s ease',
				'top': dashNavLock+'px'
			});
		}else{
			$('#dash aside').css({
				'position': 'fixed',
				'transition':'top .5s ease',
				'top': 'auto'
			});
		}
	}


	////////////////////////// ACTIVE NAV
	/////////////////////////////////////
	var pageName = $('main').attr('id');
	switch(pageName){
		case 'dui-dwi':
		case 'first-offender':
		case 'immigration':
		case 'expungements':
		case 'traffic':
			pageName = 'practice-areas';
			break;
		case 'landing':
			pageName = '';
			break;
		case 'dash':
			pageName = 'user/'+pageName;
			break;
	}
	var current = $("header nav ul li a[href='/"+pageName+"']");
	current.addClass('active')

	/////////////////////// STICKY FOOTER
	/////////////////////////////////////
	var footerHeight = 0,
		footerTop = 0,
		$footer = $("footer");
           
	positionFooter();
   
	function positionFooter() {
   
		footerHeight = $footer.height();
		footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)-30;
		loginBG = footerTop - 45;
   
		if ( ($(document.body).height()+footerHeight) < $(window).height()) {
			$footer.css({
				position: "absolute",
				top: footerTop+"px"
			});
			$('#login section').css({
				height: loginBG+"px"
			});
		} else {
			$footer.css({
				position: "static"
			})
		}
	}

	$(window).resize(function(){
		positionFooter();
		windowTop();
		navCheck();
	});
	$(window).scroll(function(){
		windowTop();
	});
};
