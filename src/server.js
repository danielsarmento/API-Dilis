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

cron.schedule('0-59/1 0-23 1-31 6 mon-tue-wed-thu-fri-sat-sun', () => {
  let hora = new Date
  console.log(`Executando rotina Programada...${hora.getHours()}:${hora.getMinutes()} | ${hora.getDate()}/${hora.getMonth()}/${hora.getFullYear()}`)
  axios.get(`https://api-vercel-ochre.vercel.app/routine`)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});