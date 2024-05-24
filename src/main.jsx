import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { TarjetaPresentacion } from './TarjetaPresentacion'
import { ContadorApp } from './ContadorApp'
import { GeneradorColores } from './GeneradorColores'
import { GeneradorEmojis } from './GeneradorEmojis'
import { Adivinanza } from './Adivinanza'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TarjetaPresentacion nombre="Octavio" apellido="Biancotti" profesion="Estudiante" descripcion="Un tipo que aslto muchos bancos, fue compañero de celda de pablo escobar, le tiene miedo a las mentirosas" />
    <ContadorApp value={0} />

    <GeneradorColores/>

    <GeneradorEmojis/>


    <Adivinanza/>







    



  </React.StrictMode>,
)

