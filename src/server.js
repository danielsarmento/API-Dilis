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

cron.schedule('0-59/15 0-23 1-31 6 mon-tue-wed-thu-fri-sat-sun', () => {
  let hora = new Date
  console.log(`Executando Disparos... ${hora.getHours()}:${hora.getMinutes().toString().padStart(2, '0')} | ${hora.getDate().toString().padStart(2, '0')}/${(hora.getMonth() +1).toString().padStart(2, '0')}/${hora.getFullYear()}`)
  axios.get(`http://145.14.134.34:3333/routine`)
})

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});