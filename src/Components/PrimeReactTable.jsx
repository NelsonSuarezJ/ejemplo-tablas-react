//import axios from 'axios'
import { useEffect } from 'react'
import api from '../controllers/httpClient'

const PrimeReactTable = () => {

    const getRestaurantes = async () => {
        try {
            const respuesta = await api.get('/restaurantes')
            console.log(respuesta.data[0]);
            console.log('hola');
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        console.log('useEffect listo')
        getRestaurantes()
    }, [])

    return (
        <div>
            Tabla Prime React
        </div>
    )
}

export default PrimeReactTable
