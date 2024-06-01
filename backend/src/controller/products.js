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

exports.addImages = async (req,res)=>{
  console.log(req.file);
  let result = await productsService.addImages(req.params.id,{ avatar: req.file.filename })
  result ? res.json({message: 'avatar updated successfully'}) : res.json({message: 'avatar updated failed'}) 
}
