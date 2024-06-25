import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";
import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard";



const Rotas = () => {

    const { setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Home Page',
                icon: 'home',
                path: '/home'
            },
        ])
    }, [])

    return ( 
        <Routes>
            <Route path="/home" element={<Dashboard />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
     );
}
 
export default Rotas;