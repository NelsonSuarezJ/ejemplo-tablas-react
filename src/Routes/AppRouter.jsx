import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<p>home</p>} />
            <Route path='about' element={<p>About</p>} />
        </Routes>
    )
}

export default AppRouter
