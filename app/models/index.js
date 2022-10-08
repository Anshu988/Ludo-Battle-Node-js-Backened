const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.tutorials = require("./tutorial.model.js")(mongoose);
const {userModel} = require("../../model/user.js");
const {gameModeModel}=require("../../model/user.js");
const {betdeductionModel}=require("../../model/user.js");
const AdminUser = require("./admin.model.js");

db.userModels=userModel;
db.gameModeModels=gameModeModel;
db.betdeductionModels=betdeductionModel;
db.AdminUsers=AdminUser
 
module.exports = db;