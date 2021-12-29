//import axios from 'axios'
import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import api from '../controllers/httpClient'

const PrimeReactTable = () => {

    const [restaurantes, setrestaurantes] = useState()
    const [loading, setloading] = useState(false)

    const getRestaurantes = async () => {
        try {
            setloading(true)
            const respuesta = await api.get('/restaurantes')
            setrestaurantes(respuesta.data)
            setloading(false)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getRestaurantes()
    }, [])

    return (
        <div className="card">
            <DataTable value={restaurantes} responsiveLayout='scroll' paginator removableSort loading={loading} scrollable scrollHeight="400px"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}>
                <Column field="name" header="Nombre" style={{ width: '25%' }} sortable filter></Column>
                <Column field="cuisine" header="Comida" style={{ width: '25%' }} sortable filter></Column>
                <Column field="borough" header="Ciudad" style={{ width: '25%' }} sortable filter></Column>
                <Column field="address.street" header="Calle" style={{ width: '25%' }} sortable filter></Column>
            </DataTable>
        </div>
    )
}

export default PrimeReactTable
