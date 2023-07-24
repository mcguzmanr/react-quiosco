import  useSWR  from "swr"
import Producto from "../components/Producto"
import Spinner from "../components/Spinner"
import ErrorInicio from "../components/ErrorInicio"
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

  if(isLoading) return <Spinner />

  const productos = data.data.filter(webada => parseInt(webada?.categoria_id)=== categoriaActual?.id)

  return (
    productos.length > 0 ? (
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
    ) : (
      <ErrorInicio />
    )

  )
}
