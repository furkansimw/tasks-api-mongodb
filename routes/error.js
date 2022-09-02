const CustomError = require("../utils/custom-error");
const error = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send("ERROR");
  }
};

module.exports = error;
