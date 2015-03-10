module.exports = function(sequelize){
	var Doc = {
		name: String,
		updated: Date,
		created: Date,
		url: String
	}

	var Address = {
		street1: String,
		street2: String,
		city: String,
		state: String,
		zip: String
	}

	var User = {
		userId: String,
		active: Boolean,
		type: String,
		username: String,
		email: String,
		password: String,
		name: {
			first: String,
			last: String,
			full: String
		},
		gender: String,
		locale: String,
		lang: String,
		address: {
			home: {},
			work: {}
		},
		phone: String,
		images: {
			profile: String
		},
		description: String,
		docs: [],
		updated: Date,
		created: Date
	}
}