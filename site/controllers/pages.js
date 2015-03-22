var fs = require('fs');  // file system

module.exports = function(){
	function loginFailMsg(req,res){
		if(!req.session.user){
			req.session.user = {};
			req.session.user.active = 0;
		}
		if(!req.session.msg){
			console.log('!req.session.msg')
			req.session.msg = '';
			req.session.reloader = 1;
		}else{
			console.log('else !req.session.msg');
			if(req.session.loginFail === 0){
				console.log('req.session.loginFail === 0');
				if(req.session.reloader === 0){
					console.log('req.session.reloader === 0');
					req.session.msg = '';
					req.session.reloader = 1;
				}else{
					req.session.reloader = 0;
					console.log('else req.session.reloader === 0');
				}
			}else{
				console.log('else req.session.loginFail === 0');
				req.session.reloader = 0;
				req.session.loginFail = 0;
			}
		}
		console.log(req.session.user);
	}

	//	Define root route action
	app.get('/',function(req, res){
		loginFailMsg(req,res);
		
		res.render('index', {message: req.session.msg, user: req.session.user});
	});

	//	Render template action for all pages
	app.get('/:page', function(req, res){
		loginFailMsg(req,res);

		console.log('||=================-------------------> req.session.user');
		console.log(req.session.user);

		if(fs.existsSync('views/' + req.params.page + '.ejs')){
			res.render(req.params.page, {message: req.session.msg, user: req.session.user, users_list: ''});
		}else{
			res.redirect('/');
			// res.render('404');
		}
	});

	app.get('/user/:page', function(req,res){
		if(fs.existsSync('views/user/' + req.params.page + '.ejs')){
			if(req.session.user){
				if(req.session.user.active === 1){
					if(req.session.user.type == 'user'){
						res.render('user/'+req.params.page, {message: req.session.msg, user: req.session.user, users_list: ''});
					}else{
						res.render('user/'+req.params.page, {message: req.session.msg, user: req.session.user, users_list: req.session.users_list});
					}
				}else{
					res.redirect('/');
				}
			}else{
				res.redirect('/');
			}
		}else{
			if(req.session.user){
				res.redirect('/user/dash')
			}else{
				res.redirect('/');
			}
			// res.render('404');
		}
	})
	app.get('/admin/:page', function(req,res){
		if(fs.existsSync('views/admin/' + req.params.page + '.ejs')){
			if(req.params.page == 'user'){
				if(req.session.userInfo){
					req.session.msg = 'Login success';
					res.render('admin/'+req.params.page, {message: req.session.msg, user: req.session.user, userInfo: req.session.userInfo});
				}else{
					res.redirect('/');
				}
			}
		}else{
			res.redirect('/');
		}
	});
}