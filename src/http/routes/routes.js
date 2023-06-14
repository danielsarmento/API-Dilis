import express from 'express'
export const routes = express.Router()

// Importe os controladores
import {home} from '../controllers/homeController.js'
import { sendManual } from '../controllers/sendController.js';

// Defina suas rotas
routes.get('/', home);
routes.get('/send', sendManual);
