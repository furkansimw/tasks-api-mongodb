const error = (err, req, res, next) =>
  res.status(500).json({
    msg: "error",
  });

module.exports = error;
