const mongoose = require('mongoose');

const Items = mongoose.model('Items');

// Contrôlleur permettant de récupérer tout les produits du 'catalogue'
module.exports.itemsList = (req, res, next) => {
    Items.find({}, (err, items) => {
        if (!err)
            res.status(200).json({catalogue: items});
        else {
            res.status(500).json({errMsg: err});
        }
    });
}
