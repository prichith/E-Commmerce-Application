const productsService = require("../services/products");

exports.add = async (req, res) => {
  console.log(req.body);
  try {
    let result = await productsService.add(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Product added failed !");
    console.error(error) || console.log("Product added failed");
  }
};
