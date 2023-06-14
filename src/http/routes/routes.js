import express from 'express'
export const routes = express.Router()

// Importe os controladores
import {home} from '../controllers/homeController.js'

// Defina suas rotas
routes.get('/', home);
