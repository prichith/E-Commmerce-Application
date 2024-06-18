const Products = require('../model/product');

exports.add = async (query) => {
    try {
      const newUser = new Products(query);
      newUser.save();
  
      console.log(newUser,'==new user');
      return newUser;
    } catch (error) {
      console.error(error);
    }
  };