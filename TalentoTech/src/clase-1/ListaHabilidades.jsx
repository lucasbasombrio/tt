function ListaHabilidades() {
  const habilidades = ["HTML", "CSS", "JavaScript", "React"]

  return (
    <ul>
      {habilidades.map((habilidad, index) => (
        <li key={index}>{habilidad}</li>
      ))}
    </ul>
  )
}

export default ListaHabilidades