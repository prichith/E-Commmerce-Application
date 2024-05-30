const express = require('express');
const route = express.Router();
const productsController = require('../controller/products');

route.post('/admin/product',productsController.add);
// route.put('/contactlist/:id',contactList.update);
// route.delete('/contactlist/:id',contactList.delete);
// route.get('/contactlist/:page/:limit/:search',contactList.pagination);

module.exports = route;
