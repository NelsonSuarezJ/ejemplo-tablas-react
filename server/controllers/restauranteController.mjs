import restaurant from '../models/restaurantes.mjs';

class RestauranteController {
    static getAll = async (req, res) => {
        try {
            const restaurantes = await restaurant.find()
            res.status(200).json(restaurantes)
        } catch (error) {
            res.status(404).json({ mensaje: error.message })
        }
    }
}

export default RestauranteController