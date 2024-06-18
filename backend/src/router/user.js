const express = require('express');
const route = express.Router();
const userController = require('../controller/user.js');
// const multer = require('multer');
// const path = require('path');
// const { generateAvatarId } = require('../images/generateAvatarID');

route.post('/user/add',userController.add);

module.exports = route;
