import RestauranteController from '../controllers/restauranteController.mjs';
import express from 'express';

const restaurantRoute = express.Router()

restaurantRoute.get('/restaurantes', RestauranteController.getAll)

export default restaurantRoute