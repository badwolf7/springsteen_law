var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var moment = require('moment');
var sha1 = require('sha1');
var uuid = require('uuid'); // Generate v4 ---> uuid.v4();

module.exports = function(){
	app.get('/admin/users/list', function(req,res){
		MongoClient.connect('mongodb://127.0.0.1:27017/springsteen-law', function(err, db){
			if(err) throw err;
			var collection = db.collection('users');
			collection.find().toArray(function(err, users){
				if(err) throw err;
				console.log(users);
				req.session.users_list = users;
				res.redirect('/user/dash');
			});
		});
	});
	app.get('/admin/get/user', function(req,res){
		console.log(req.query);
		MongoClient.connect('mongodb://127.0.0.1:27017/springsteen-law', function(err, db){
			if(err) throw err;
			var collection = db.collection('users');
			collection.find({'userId':req.query.uId}).toArray(function(err, user){
				if(err) throw err;
				console.log(user);
				console.log('')
				console.log('')
				req.session.userInfo = user[0];
				res.json(req.session.userInfo);
			});
		});
	});
}