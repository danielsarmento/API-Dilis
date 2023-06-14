import express from 'express'
export const routes = express.Router()

// Importe os controladores
import {home} from '../controllers/homeController.js'
import { sendManual } from '../controllers/sendManualController.js';
import { sendRoutine } from '../controllers/sendRoutineController.js';
import { searchData } from '../controllers/searchDataCintroller.js';

// Defina suas rotas
routes.get('/', home)
routes.post('/sendManual', sendManual)
routes.get('/routine', sendRoutine)
routes.get('/register/:phone', searchData)