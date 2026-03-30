function ListaTareas() {
  const tareas = [
    "Estudiar React",
    "Leer documentación",
    "Practicar componentes",
    "Hacer ejercicios"
  ]

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas