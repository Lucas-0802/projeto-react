import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";
import { useEffect } from "react";
import { Dashboard, ListPeoples } from "../pages";

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
                label: 'Peoples',
                icon: 'people',
                path: '/people'
            },
        ])
    }, [])

    return ( 
        <Routes>
            <Route path="/home" element={<Dashboard />} />

            <Route path="/people" element={<ListPeoples />} />
            <Route path="/people/details/:id" element={<ListPeoples />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
     );
}
 
export default Rotas;