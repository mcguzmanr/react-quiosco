import useSWR from 'swr'
import clienteAxios from '../config/axios'
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function RenovacionStock() {

    const { handleClickRenovacionStock } = useQuiosco();

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/productos-without-stock', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }). then(datos => datos.data)

    const { data, error, isLoading } = useSWR('/api/productos-without-stock', fetcher, {refreshInterval: 10000})


        


    if(isLoading) return 'Cargando...'
    return (
        <div>
            <h1 className="text-4xl font-black">Actualizacion de disponibilidad</h1>
            <p className="text-2xl my-10">
                Modifica la disponibilidad desde acá
            </p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {data.data.map(producto => (
                    <div key={producto.id} className="border p-3 shadow bg-white">              
                        <img 
                            
                             alt={`imagen ${producto.nombre}`}
                             className="w-full"
                             src={`/img/${producto.imagen}.jpg`}
                        />

                        <div key={producto.id} className="p-5">
                            <h3  className="text-2xl font-bold">{producto.nombre}</h3>
                            <p className="mt-5 font-black text-4xl text-amber-500">
                                { formatearDinero(producto.precio) }
                            </p>

                            <button
                                type="button"
                                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                                onClick={() => handleClickRenovacionStock(producto.id)}
                            >
                                Renovar disponibilidad
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            
        
        </div>
    )
}
