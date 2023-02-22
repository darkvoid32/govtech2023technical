const db = require("../models");
const ShortenedUrl = db.shortenedUrl;

exports.create = (req, res) => {
  if (!req.body.fullUrl) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const hasher = require('crypto');
  const hash = hasher.createHash('md5').update(req.body.fullUrl).digest('hex');

  const shortenedUrl = new ShortenedUrl({
    fullUrl: req.body.fullUrl,
    shortenedUrl: hash.slice(0, 10)
  });

  shortenedUrl
    .save(shortenedUrl)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the url."
      });
    });
};

exports.find = (req, res) => {
    const url = req.params.url;

    ShortenedUrl.find({ shortenedUrl: url })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found url with shortenedUrl " + url });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving url with shortenedUrl=" + url });
      });
};