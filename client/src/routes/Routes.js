import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Agregar from '../pages/Agregar';
import Editar from '../pages/Editar';
import PantallaPrincipal from '../pages/PantallaPrincipal';

export default createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<PantallaPrincipal/>
        },
        {
            path:'/editar/:id',
            element:<Editar/>
        },
        {
            path:'/agregar',
            element:<Agregar/>
        }
    ]
}])