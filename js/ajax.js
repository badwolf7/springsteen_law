var template;

var ajax = function(){
	console.log('ajax')
	$('section.users.admin article').click(function(){
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
		var msgId = $(this).attr('msgId');
	});
}
ajax();