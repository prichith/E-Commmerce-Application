const userService = require("../services/user");

exports.add = async (req, res) => {
  try {
    let result = await userService.add(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("User added failed !");
    console.error(error) || console.log("User added failed");
  }
};