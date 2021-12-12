import { Route, Routes } from "react-router-dom"
import Aggrid from "../Components/Aggrid"
import BootstrapTable from "../Components/BootstrapTable"
import MaterialTable from "../Components/MaterialTable"
import PrimeReactTable from "../Components/PrimeReactTable"
import InicioPage from "../Pages/InicioPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<InicioPage />}>
                <Route index element={<PrimeReactTable />} />
                <Route path='primetable' element={<PrimeReactTable />} />
                <Route path='bootstraptable' element={<BootstrapTable />} />
                <Route path='materialtable' element={<MaterialTable />} />
                <Route path='aggrid' element={<Aggrid />} />
            </Route>

        </Routes>
    )
}

export default AppRouter
