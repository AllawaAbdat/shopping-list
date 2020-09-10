const mongoose = require('mongoose');

const ProductList = mongoose.model('ProductList');

// Contrôlleur permettant d'ajouter une nouvelle liste de courses
module.exports.newProductList = (req, res, next) => {
    var productList = new ProductList();
    productList.productName = req.body.productName;
    productList.productDescription = req.body.productDescription;
    productList.productPrice = req.body.productPrice;
    productList.userId = req.body.userId;
    productList.listTitle = req.body.listTitle;
    productList.creationDate = req.body.creationDate;
    productList.products = req.body.products;
    productList.totalAmount = req.body.totalAmount;

    productList.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}

// Contrôlleur permettant de récupérer toutes les listes de courses de l'utilisateur
module.exports.getUserProductLists = (req, res, next) => {
    ProductList.find({userId: req._id}, (err, items) => {
        if (!err)
            res.status(200).json({response: items});
        else {
            res.status(500).json({errMsg: err});
        }
    });
}

// Contrôlleur permettant de supprimer une liste de courses
module.exports.deleteUserProductList = (req, res, next) => {
    ProductList.findOneAndRemove({_id: req.params._id}, (err, productList) => {
        if (!err)
            res.status(200).json({response: productList});
        else {
            res.status(500).json({errMsg: err});
        }
    });
}

// Contrôlleur permettant de modifier une liste de courses
module.exports.updateUserProductList = (req, res, next) => {
    ProductList.findById({_id: req.body._id}, (err, productList) => {
        if (!err) {
            productList.listTitle = req.body.listTitle;
            productList.save((err, productList) => {
                if (!err)
                    res.status(200).json({response: productList});
                else {
                    res.status(500).json({errMsg: err});
                }
            });
        } else {
            res.status(500).json({errMsg: err});
        }
    });
}
