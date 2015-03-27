var template;

var ajax = function(){
	if($('main').hasClass('dash')){
		var uId = $('#uId').val();
	}

	$('section.users.admin article').click(function(){
		// Admin clicks user on dash
		var $this = $(this);
		var userId = $this.children('input[type=hidden]').val();
		console.log(userId);
		console.log(currentUser);
		var data = {
			uId: userId,
			cUser: currentUser
		}
		getUser(data);
	});
	function getUser(data){
		// AJAX to retrieve user data
		$.ajax({
			type: 'GET',
			url: '/admin/get/user',
			data: data,
			dataType: 'json',
			error: function(err){
				console.log('ajax error');
				console.log(err);
			},
			success: function(userInfo){
				console.log('user load');
				console.log(userInfo);
				window.location.replace('/admin/user');
			}
		});
	}

	$('section.messages table.messages tr').click(function(){
		// View Message from table
		var msgId = $(this).attr('msgId');
		var data = {
			uId: uId,
			msgId: msgId
		}
		getMessage(data);
	});
	function getMessage(data){
		// AJAX to retreive message info
		$.ajax({
			type: 'GET',
			url: '/user/get/message',
			data: data,
			dataType: 'json',
			error: function(err){
				console.log('ajax error');
				console.log(err);
			},
			success: function(userInfo){
				console.log('user load');
				console.log(userInfo);
				window.location.replace('/user/message');
			}
		});
	}
}
ajax();