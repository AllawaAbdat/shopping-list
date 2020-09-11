const mongoose = require('mongoose');

// Connexion à la base de données
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded !');
    } else {
        console.log('Error in connection on MongoDB :' + JSON.stringify(err, undefined, 2));
    }
});

require('./user.model');
require('./items.model');
require('./newItem.model');
require('./product-list.model');