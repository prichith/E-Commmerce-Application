const express = require('express');
const route = express.Router();
const productsController = require('../controller/products');
const multer = require('multer');
const path = require('path');
const { generateAvatarId } = require('../images/generateAvatarID');


// save avatar into a folder [multer]
const storage = multer.diskStorage({
    destination : (req,file,cb) =>{ cb(null,"src/images/products") },
    filename: (req,file,cb) =>{ cb(null,generateAvatarId()+ path.extname(file.originalname)) }
})
const upload = multer({storage : storage})
//END save avatar into a folder

route.post('/admin/product',productsController.add);
route.post('/admin/product/:id/avatar', upload.array('images', 10),productsController.addImages);
route.get('/admin/product',productsController.getAll);

route.get('/products/:categoryName',productsController.productGroup); // find all products w.r.t categories

module.exports = route;
