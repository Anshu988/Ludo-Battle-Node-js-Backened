const db = require("../models");
const service=require("../../controllers/common/commonservices.js");
const Admin = db.admin;
// db.tutorials = require("./tutorial.model.js")(mongoose);
// const {userModel}=require("../../model/user.js");
const userModel=db.userModels;
const gameModeModel=db.gameModeModels;
const betdeductionModel=db.betdeductionModels;
const AdminUser=db.AdminUsers;
exports.index = async(req, res) => {
  
    res.render('web/index', {layout : ''});
}