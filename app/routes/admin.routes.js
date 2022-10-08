module.exports = admin => {
    const admins = require("../controllers/admin.controller.js");
    var router = require("express").Router();
    
    router.get("/login", admins.login);
   

    router.get("/dashboard", admins.dashboard);
    router.post("/login_post", admins.login_post);
    router.post("/register_post", admins.register_post);
    router.get("/logout", admins.logout);
    router.get("/manage_user", admins.manage_user);
    router.get("/game_mode", admins.game_mode);
    router.get("/bet_list", admins.bet_list);
    router.get("/create_bet_list", admins.create_bet_list);
    router.post("/Bet_deduction_create", admins.Bet_deduction_create);



    admin.use('/admin', router);
  
  };

  