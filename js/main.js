window.onload = function(){
	$('header svg path[fill="#606D80"]').attr('fill','#DCE0E6');
	$('footer svg path[fill="#606D80"]').attr('fill','#DCE0E6');
	$('header svg path[fill="#2B4C7E"]').attr('fill','#567EBB');
	$('footer svg path[fill="#2B4C7E"]').attr('fill','#567EBB');

	if($('.modal .loginmsg').text() != '' && $('.modal .loginmsg').text() != 'Login success'){
		$('#login-modal').modal('show');
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
	}
	console.log(pageName);
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

	$(window)
		.resize(positionFooter)
};
