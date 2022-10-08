var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String
}),
Admin_User = mongoose.model('Admin_User', userSchema);

module.exports = Admin_User;