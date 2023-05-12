import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminSidebar() {
    const {logout} = useAuth({middleware: 'auth'});
    return (
        <aside className="md:w-72 h-screen">
            <div className="p-4">
                <img 
                    src="/img/logo.svg"
                    className="w-40"
                    alt="imagen logo"
                />
            </div>

            <nav className="flex flex-col p-4">
                <Link to="/admin" className="font-bold text-lg">Ordenes</Link>
                <Link to="/admin/productos" className="font-bold text-lg">Productos disponibles</Link>
                <Link to="/admin/productos/stock" className="font-bold text-lg">Modificar disponibilidades</Link>
            </nav>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 text-white truncate" 
                    onClick={logout}   
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    )
}
