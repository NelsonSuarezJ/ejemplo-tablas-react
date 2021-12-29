//import axios from 'axios'
import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import api from '../controllers/httpClient'

const PrimeReactTable = () => {

    const [restaurantes, setrestaurantes] = useState()

    const getRestaurantes = async () => {
        try {
            const respuesta = await api.get('/restaurantes')
            setrestaurantes(respuesta.data)
            //console.log(restaurantes);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getRestaurantes()
    }, [])

    return (
        <div className="card">
            <DataTable value={restaurantes} responsiveLayout="scroll" paginator
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}>
                <Column field="name" header="Nombre" style={{ width: '25%' }}></Column>
                <Column field="cuisine" header="Comida" style={{ width: '25%' }}></Column>
                <Column field="borough" header="Ciudad" style={{ width: '25%' }}></Column>
                <Column field="address.street" header="Calle" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    )
}

export default PrimeReactTable
