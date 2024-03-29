import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminLayout from './layouts/AdminLayout'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'
import RenovacionStock from './views/RenovacionStock'

import ErrorInicio from './components/ErrorInicio'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />,
                errorElement: <ErrorInicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login /> 
            },
            {
                path: '/auth/registro',
                element: <Registro /> 
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />,
                errorElement: <ErrorInicio />
            },
            {
                path: '/admin/productos',
                element: <Productos />,
                errorElement: <ErrorInicio />
            },
            {
                path: '/admin/productos/stock',
                element: <RenovacionStock />,
                errorElement: <ErrorInicio />
            }
        ]
    }
])

export default router