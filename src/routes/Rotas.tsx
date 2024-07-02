import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";
import { useEffect } from "react";
import { Dashboard, ListCitys } from "../pages";

const Rotas = () => {

    const { setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Home Page',
                icon: 'home',
                path: '/home'
            },
            {
                label: 'Citys',
                icon: 'location_city',
                path: '/citys'
            },
        ])
    }, [])

    return ( 
        <Routes>
            <Route path="/home" element={<Dashboard />} />

            <Route path="/citys" element={<ListCitys />} />
            <Route path="/citys/details/:id" element={<ListCitys />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
     );
}
 
export default Rotas;