const Category = require('../model/categories');

exports.add = async (query) => {
    try {
      const newCategory = new Category(query);
      newCategory.save();

      return newCategory;
    } catch (error) {
      console.error(error);
    }
  };

exports.getAll = async () => {
    try {
      const result = await Category.find();
      console.log(result,'==result');
      return result;
    } catch (error) {
      console.error(error);
    }
  };

exports.addImages = async (id, avatarData) => {
  let result = await Category.findByIdAndUpdate(
    id,
    { image: avatarData.avatars },
    { new: true }
  );

  return result;
};

