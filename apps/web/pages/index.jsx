import React from 'react'
import Template from '../src/template/Template'
import Cover from '../src/componentes/Cover/Cover'
import TituloAC from '../src/componentes/TituloAC/TituloAC'
import Tarjetas from '../src/componentes/Tajetas/Tarjetas'
import TituloBT from '../src/componentes/TituloBT/TituloBT'
import Fabricacion from '../src/componentes/Fabricacion/Fabricacion'
import Animation from '../src/componentes/Animation/Animation'
import Obten from '../src/componentes/Obten/Obten'
import Proceso from '../src/componentes/Proceso/Proceso'
import Carousel from '../src/componentes/Carousel/Carousel'
import Clientes from '../src/componentes/Clientes/Clientes'
import Contacto from '../src/componentes/Contacto/Contacto'

export default function Index(){
  return(
    <Template>
      <Cover />
      <TituloAC />
      <Tarjetas />
      <TituloBT />
      <Fabricacion />
      <Animation />
      <Obten />
      <Proceso />
      <Carousel />
      <Clientes />
      <Contacto />
    </Template>
  )
}