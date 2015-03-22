var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var moment = require('moment');
var sha1 = require('sha1');
var uuid = require('uuid'); // Generate v4 ---> uuid.v4();

// MongoClient.connect('mongodb://127.0.0.1:27017/springsteen-law', function(err, db){
// 	if(err) throw err;
// 	var collection = db.collection('users');
// 	collection.find().toArray(function(err, docs){
// 		if(err) throw err;
// 		console.log("||=====================----------------------> Users:")
// 		console.log(docs);
// 	});
// });

var now = moment().format();

var user = '';
var pass = '';
var hash = '';

module.exports = function(){
	app.get('/login',function(req, res){
		console.log('login')
		user = req.query.login.user;
		pass = req.query.login.pass;
		hash = sha1(pass+'shhh_its_a_secret'+user).toString();
		console.log(user);
		console.log(hash);

		MongoClient.connect('mongodb://127.0.0.1:27017/springsteen-law', function(err, db){
			if(err) throw err;
			var collection = db.collection('users');
			collection.findAndModify({"username":user,"password":hash}, {}, {$set:{lastAccess:now}}, {}, function(err, user){
				if(err) throw err;
				if(user.length == 0){
					req.session.msg = "Login information not found";
					req.session.loginFail = 1;
					console.log(req.session.msg);
					res.redirect('/');
				}else{
					req.session.msg = 'Login success';
					req.session.loginFail = 0;
					console.log("||=====================----------------------> Users:")
					console.log(user);
					req.session.user = user;
					console.log('');
					console.log('');
					console.log(req.session.user);
					if(req.session.user.type == 'user'){
						res.redirect('/user/dash');
					}else{
						res.redirect('/admin/users/list');
					}
				}
			});
		});
	});
	app.get('/logout',function(req,res){
		req.session.user = {};
		req.session.user.active = 0;
		req.session.msg = '';
		res.redirect('/user/dash');
	})
}