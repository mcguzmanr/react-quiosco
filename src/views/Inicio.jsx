import  useSWR  from "swr"
import Producto from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"
import clienteAxios from "../config/axios"

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  //Consulta SWR
  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    refreshInterval: 5000
  })

  if(isLoading) return 'Cargando...'

  const productos = data.data.filter(webada => webada.categoria_id === categoriaActual.id)

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
            botonAgregar={true}
          />
        ))}
      </div>
    </>
  )
}
