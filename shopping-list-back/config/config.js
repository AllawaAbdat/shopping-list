// Check environnement de développement
var env = process.env.NODE_ENV || 'development';

// Afficher la config de l'environnement de développement
var config = require('./config.json');
var envConfig = config[env];
// Ajouter la config de l'environnement à process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);