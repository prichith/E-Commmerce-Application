const Products = require('../model/product');

exports.add = async (query) => {
    try {
      const list = new Products(query);
      list.save();
  
      return list;
    } catch (error) {
      console.error(error);
    }
  };