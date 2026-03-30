import "./clase-1/Layout.css"
import Layout from "./clase-1/Layout"
import Producto from "./clase-1/Producto"
import Saludo from "./clase-1/Saludo"
import ListaHabilidades from "./clase-1/ListaHabilidades"
import Header from "./clase-1/Header"
import Main from "./clase-1/Main"
import Sidebar from "./clase-1/Sidebar"
import Footer from "./clase-1/Footer"
import ListaTareas from "./clase-1/ListaTareas"


function App() {
  //return <Saludo />
  //return <Producto />
  //return <ListaHabilidades />
   //return  <Layout />
  // return <ListaTareas />
 return (
    <div className="productos">
      <Producto />
      <Producto />
      <Producto />
    </div>
  )
}

export default App