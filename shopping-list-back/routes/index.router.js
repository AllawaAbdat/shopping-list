const express = require('express');
const router = express.Router();

// Imports des contrôleurs
const ctrlUser = require('../controllers/user.controller');
const ctrlProducts = require('../controllers/items.controller');
const ctrlProductList = require('../controllers/product-list.controller');

// Helper pour vérification du token
const jwtHelper = require('../config/jwtHelper');

// Définition de toutes les routes de l'API
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/newProductList', jwtHelper.verifyJwtToken, ctrlProductList.newProductList);
router.post('/newItem', jwtHelper.verifyJwtToken, ctrlProducts.newItem);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/itemsList', jwtHelper.verifyJwtToken, ctrlProducts.itemsList);
router.get('/getUserProductLists', jwtHelper.verifyJwtToken, ctrlProductList.getUserProductLists);
router.put('/updateUserProductList', jwtHelper.verifyJwtToken, ctrlProductList.updateUserProductList);
router.delete('/deleteUserProductList/:_id', jwtHelper.verifyJwtToken, ctrlProductList.deleteUserProductList);

module.exports = router;