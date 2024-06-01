const Products = require('../model/product');

exports.add = async (query) => {
  console.log(query,'==query');
    try {
      const list = new Products(query);
      list.save();
  
      return list;
    } catch (error) {
      console.error(error);
    }
  };

exports.addImages = async (id,avatar)=>{
  let result = await Products.findByIdAndUpdate(id,{ $set: avatar },{ new: true });
  return result;
}
