const categoriesService = require("../services/categories");

exports.add = async (req, res) => {
  try {
    let result = await categoriesService.add(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Category added failed !");
    console.error(error) || console.log("Category added failed");
  }
};

exports.getAll = async (req, res) => {
  try {
    let result = await categoriesService.getAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Category Finding failed !");
    console.error(error) || console.log("Category finding failed");
  }
};

exports.addImages = async (req, res) => {
  let avatar = req.file.filename; 
  let result = await categoriesService.addImages(req.params.id, { avatars: avatar });
  result ? res.json({ message: 'Image added successfully' }) : res.json({ message: 'Image added failed' });
};
