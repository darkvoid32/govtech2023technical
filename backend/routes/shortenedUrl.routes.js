module.exports = app => {
    const shortenedUrl = require("../controllers/shortenedUrl.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", shortenedUrl.create);

    router.get("/:url", shortenedUrl.find);

    app.use('/api/shortenedUrl', router);
  };