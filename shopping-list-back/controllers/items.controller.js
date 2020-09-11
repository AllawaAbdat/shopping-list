const mongoose = require('mongoose');

const Items = mongoose.model('Items');
const NewItem = mongoose.model('NewItem');

// Contrôleur permettant de récupérer tout les produits du 'catalogue'
module.exports.itemsList = (req, res, next) => {
    Items.find({}, (err, items) => {
        if (!err)
            res.status(200).json({catalogue: items});
        else {
            res.status(500).json({errMsg: err});
        }
    });
}

// Contrôleur permettant de créer un nouveau produit et l'ajouter au catalogue
module.exports.newItem = (req, res, next) => {
    var item = new NewItem();
    item.productName = req.body.productName;
    item.productDescription = req.body.productDescription;
    item.productPrice = req.body.productPrice;
    item.productCategory = req.body.productCategory;
    item.productCategoryId = req.body.productCategoryId;
    item.productImg = '';

    item.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}
