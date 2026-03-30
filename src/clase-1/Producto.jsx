import ImagenProducto from "./ImagenProducto"
import DescripcionProducto from "./DescripcionProducto"
import PrecioProducto from "./PrecioProducto"

function Producto() {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", width: "220px" }}>
      <ImagenProducto />
      <DescripcionProducto />
      <PrecioProducto />
      <button>Comprar</button>
    </div>
  )
}

export default Producto