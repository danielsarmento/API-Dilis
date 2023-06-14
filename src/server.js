import express from 'express'
import {routes} from './http/routes/routes.js'
import cors from 'cors'
import cron from 'node-cron'
import axios from 'axios'

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});