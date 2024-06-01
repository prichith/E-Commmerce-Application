const productsService = require("../services/products");

exports.add = async (req, res) => {
  try {
    let result = await productsService.add(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Product added failed !");
    console.error(error) || console.log("Product added failed");
  }
};

exports.getAll = async (req, res) => {
  try {
    let result = await productsService.getAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Products Finding failed !");
    console.error(error) || console.log("Products finding failed");
  }
};

exports.addImages = async (req, res) => {
  let avatars = req.files.map(file => file.filename); // req.files will contain an array of files
  let result = await productsService.addImages(req.params.id, { avatars: avatars });
  result ? res.json({ message: 'avatars updated successfully' }) : res.json({ message: 'avatars update failed' });
};
