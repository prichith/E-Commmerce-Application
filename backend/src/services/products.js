const Products = require('../model/product');

exports.add = async (query) => {
    try {
      const newProduct = new Products(query);
      newProduct.save();
  
      return newProduct;
    } catch (error) {
      console.error(error);
    }
  };

exports.delete = async (ID) => {
    try {
      const result = await Products.findByIdAndDelete(ID);
  
      return result;
    } catch (error) {
      console.error(error);
    }
  };

exports.getAll = async () => {
    try {
      const result = await Products.find();

      return result;
    } catch (error) {
      console.error(error);
    }
  };

exports.productGroup = async (query) => { //
    try {
      const result = await Products.find(query);

      return result;
    } catch (error) {
      console.error(error);
    }
  };

exports.addImages = async (id, avatarData) => {
  let result = await Products.findByIdAndUpdate(
    id,
    { $push: { images: { $each: avatarData.avatars } } },
    { new: true }
  );

  return result;
};

