module.exports = web => {
    const webs = require("../controllers/web.controller.js");
    var router = require("express").Router();
    router.get("/index", webs.index);
    web.use('/', router);
  };

  