const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: String
    }
});

mongoose.model('Items', itemSchema);