const mongoose = require('mongoose');

var productListSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: String
    },
    userId: {
        type: String
    },
    listTitle: {
        type: String
    },
    creationDate: {
        type: String
    },
    products: {
        type: Array
    },
    totalAmount: {
        type: String
    }
});

mongoose.model('ProductList', productListSchema);