const mongoose = require('mongoose');

var newItemSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: String
    },
    productCategory: {
        type: String
    },
    productCategoryId: {
        type: String
    },
    productImg: {
        type: String
    },
});

mongoose.model('NewItem', newItemSchema, 'items');