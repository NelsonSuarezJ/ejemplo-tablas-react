import express from 'express'
//import dotenv from 'dotenv/config'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import restaurantRoute from './routes/restaurantes.mjs'

//configuracion
const app = express()
//dotenv.config()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//rutas
app.use('/api', restaurantRoute)

//conexion a Mongo
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.aixt1.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
try {
    await mongoose.connect(uri)
    console.log('Conectado a Mongo');
} catch (error) {
    console.log(error)
}

//escucha
app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
    console.log(`Escuchando en el puerto: ${app.get('PORT')}`)
})
