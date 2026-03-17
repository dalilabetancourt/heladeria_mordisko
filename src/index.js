import express from 'express'
import router from './routes/appRoutes.js'
import  userRouter from'./routes/userRouter.js'
import productRouter from './routes/productRouters.js'
import'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000


//Middlewares: para recibir datos el servidor
app.use(express.json())

///Rutas 

app.use('/', router)
app.use('/users',userRouter)
app.use('/products',productRouter)

app.listen(PORT ,()=>{
    console.log(`Servidor corriendo en port http://localhost:${PORT}`)
})

