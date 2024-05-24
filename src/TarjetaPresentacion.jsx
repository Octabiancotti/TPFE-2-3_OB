import './Styles/TarjetaPresentacion.css'

export const TarjetaPresentacion = ({nombre, apellido, profesion, descripcion}) => {
  return (

    <>
    <h1>Tarjeta de presentacion</h1>
    <li>Nombre: {nombre}</li>
    <li>Apellido: {apellido}</li>
    <li>Profesion: {profesion}</li>
    <li>Descripcion: {descripcion}</li>
    </>
  )
}
