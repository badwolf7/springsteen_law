window.onload = function(){
	// Logo Colors
	$('header svg path[fill="#606D80"]').attr('fill','#DCE0E6');
	$('footer svg path[fill="#606D80"]').attr('fill','#DCE0E6');
	$('header svg path[fill="#2B4C7E"]').attr('fill','#567EBB');
	$('footer svg path[fill="#2B4C7E"]').attr('fill','#567EBB');


	// New Message
	$('.openNewMsg').click(function(){
		// open a new message
		$('#newMsg section form')[0].reset();
		$('#newMsg').removeClass('minified');
		$('#newMsg section').removeClass('minified');
		$('#newMsg').show(500);
		$('#newMsg section').show(600);
		$('input[name=to]').focus();
	});
	// function to close/remove new message
	function closeMsg(){
		$('#newMsg').hide(500);
		$('#newMsg section').hide(400);
	}
	function minMsg(){
		// minimize message
		$('#newMsg').addClass('minified');
		$('#newMsg section').addClass('minified');
	}
	$('#newMsg').click(function(e){
		// close the message
		if(e.target !== this) return;
		minMsg();
	});
	$('#newMsg section .fa-close').click(function(){
		// close the message
		closeMsg();
	});

	var go = 1; // go to check state of minimizing for click status
	$('.minified .msg-header').click(function(){
		// make minified message full size
		if(go){
			$('#newMsg').removeClass('minified');
			$('#newMsg section').removeClass('minified');
		}else{
			go++;
		}
	});
	$('.fa-minus').click(function(){
		if($('#newMsg').hasClass('minified')){
			// full size message
			$('#newMsg').removeClass('minified');
			$('#newMsg section').removeClass('minified');
		}else{
			// minimize message
			minMsg();
		}
		go--;
	});
	$('.message-response').click(function(){
		if($('.message-response').hasClass('min')){
			$('.message-response').removeClass('min');
			$('.message-response textarea').attr('placeholder',"What's your message");
			console.log('responder');
		}
	});
	$('.message-response textarea').focusout(function(){
		if($('.message-response textarea').val() == ''){
			$('.message-response').addClass('min');
			$('.message-response textarea').attr('placeholder','Click to Reply');
			console.log('responder out');
		}
	});

	// Set the message title to subject
	$('#newMsg form input[name=subject]').keyup(function(){
		console.log($(this).val());
		if($(this).val() == ''){
			// default value for no subject
			$('#newMsg .msg-header p span').text("New Message");
		}else{
			$('#newMsg .msg-header p span').text($(this).val());
		}
	})

	// Login Fail Modal Check
	if($('.modal .loginmsg').text() != '' && $('.modal .loginmsg').text() != 'Login success'){
		$('#login-modal').modal('show');
	}
	// oh no, I forgot my password
	$('.forgot').click(function(){
		$('#login-modal').modal('hide');
	});
	// focus on username when modal is visible
	$('#login-modal').on('shown.bs.modal',function(){
		$('input[name="login[user]"]').focus();
	})

	// TIME CONVERSIONS
	function convertMonth(m){
		var month;
		switch(m){
			case 0:
				month = 'January';
				break;
			case 1:
				month = 'February';
				break;
			case 2:
				month = 'March';
				break;
			case 3:
				month = 'April';
				break;
			case 4:
				month = 'May';
				break;
			case 5:
				month = 'June';
				break;
			case 6:
				month = 'July';
				break;
			case 7:
				month = 'August';
				break;
			case 8:
				month = 'September';
				break;
			case 9:
				month = 'October';
				break;
			case 10:
				month = 'November';
				break;
			case 11:
				month = 'December';
				break;
		}
		return month;
	}

	// convert for individual user login times
	if($('#dash').hasClass('user-dash')){
		var dateTime = new Date($('.dateTime').text());
		var yyyy = dateTime.getFullYear();
		var month = dateTime.getMonth();
		month = convertMonth(month);
		var dd = dateTime.getDay();
		var hh = dateTime.getHours();
		var mm = dateTime.getMinutes();
		var ss = dateTime.getSeconds();
		var date =  month+' '+dd+', '+yyyy
		var time = '<span class="text-muted">&nbsp;&nbsp;&nbsp;'+hh+':'+mm+':'+ss+'</span>';
		var date_str = date + time;
		console.log(date_str);
		$('.dateTime').text(date);
		$('.dateTime').append(time);
	}

	// convert for msg sent times
	var msgdt;
	for(var x=0;x<$('table.messages tr').length;x++){
		x++;
		msgdt = new Date($('table.messages tr:nth-child('+x+') .dateTime').text());
		msgdt_month = msgdt.getMonth();
		msgdt_month = convertMonth(msgdt_month);
		msgdt_date = msgdt.getDate();
		msgdt_year = msgdt.getFullYear();
		msgdt_hour = msgdt.getHours();
		msgdt_min = msgdt.getMinutes();
		msgdt_str = msgdt_month+' '+msgdt_date+' | '+msgdt_hour+":"+msgdt_min
		$('table.messages tr:nth-child('+x+') .dateTime').text(msgdt_str);
		x--;
	}


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
	var docHeight = $(document).height();
	var footerHeight = $('footer').height();
	var heightMin = screenHeight - footerHeight;
	var catcher = footerTop - heightMin + 6;
	var screenTop = '';
	var dashNavLock = footerTop - dashNavHeight - footerHeight - 47;

	function windowTop(){
		if(docHeight > 800){
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
			if($('main').hasClass('user-dash')){
				pageName = '/admin/user';
			}else{
				pageName = 'user/'+pageName;
			}
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
