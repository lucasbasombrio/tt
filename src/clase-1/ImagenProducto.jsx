import lenovoProducto from "../assets/lenovoProducto.jpg"

function ImagenProducto() {
  return (
    <img
      src={lenovoProducto}
      alt="Producto"
       style={{ width: "100%" }}
    />
  )
}

export default ImagenProducto