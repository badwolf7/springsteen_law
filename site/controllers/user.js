var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var moment = require('moment');
var sha1 = require('sha1');
var uuid = require('uuid'); // Generate v4 ---> uuid.v4();

module.exports = function(){
	app.get('/user/get/message', function(req,res){
		// Get the users message that was selected
		console.log(req.query);
		MongoClient.connect('mongodb://127.0.0.1:27017/springsteen-law', function(err, db){
			if(err) throw err;
			var collection = db.collection('users');
			collection.find({'userId':req.query.uId}).toArray(function(err, user){
				if(err) throw err;
				console.log('||====================================------------------------------------')
				console.log(user);
				console.log('')
				console.log('')
				console.log('||====================================------------------------------------')
				for(var i=0;i<user[0].msgs.length;i++){
					console.log(user[0].msgs[i].id);
					if(user[0].msgs[i].id == req.query.msgId){
						req.session.messageObj = user[0].msgs[i];
					}
				}
				res.json(req.session.messageObj);
			});
		});
	});
}