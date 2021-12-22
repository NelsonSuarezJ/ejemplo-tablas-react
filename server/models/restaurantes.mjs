import mongoose from 'mongoose'

const { Schema } = mongoose
const restaurantSchema = new Schema({
    name: String,
    cuisine: String,
    borough: String,
    street: String,
    building: String,
    zipcode: String,
})

const restaurant = mongoose.model('restaurant', restaurantSchema)

export default restaurant