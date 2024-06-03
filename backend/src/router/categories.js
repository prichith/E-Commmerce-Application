const express = require('express');
const route = express.Router();
const categoriesController = require('../controller/categories');
const multer = require('multer');
const path = require('path');
const { generateAvatarId } = require('../images/generateAvatarID');


// save avatar into a folder [multer]
const storage = multer.diskStorage({
    destination : (req,file,cb) =>{ cb(null,"src/images/categories") },
    filename: (req,file,cb) =>{ cb(null,generateAvatarId()+ path.extname(file.originalname)) }
})
const upload = multer({storage : storage})
//END save avatar into a folder

route.post('/admin/category',categoriesController.add);
route.post('/admin/category/:id/avatar', upload.single('image'),categoriesController.addImages);
route.get('/admin/category',categoriesController.getAll);


module.exports = route;
