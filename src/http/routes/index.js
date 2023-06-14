const express = require('express');
const router = express.Router();

// Importe os controladores
const homeController = require('../controllers/homeController');

// Defina suas rotas
router.get('/', homeController.home);

module.exports = router;