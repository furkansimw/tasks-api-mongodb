const router = require("express").Router();

router.get("/", (req, res) => {
  throw {
    msg: "err",
  };

  res.send("home");
});
module.exports = router;
