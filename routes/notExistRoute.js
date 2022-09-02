const notExistRoute = (req, res) => res.status(404).json("not exist route");

module.exports = notExistRoute;
