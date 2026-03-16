import express from 'express'
import router from './routes/appRoutes.js'
import'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

///Rutas 

app.use('/', router)

app.listen(PORT ,()=>{
    console.log(`Servidor corriendo en port http://localhost:${PORT}`)
})