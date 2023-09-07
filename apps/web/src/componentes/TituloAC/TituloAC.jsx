import React from 'react'
import Image from 'next/image'
import { Figura } from 'ui'

export default function TituloAC(){
    return(
        <section className='block' id='tituloAC'>
            <div className='holder'>
                <div className='container-fluid' data-aos="fade-left">
                    <h2><Image src={Figura} alt='Diseño de placas flexográficas'/>Todo comienza con una placa flexográfica</h2>
                </div>
            </div>
        </section>
    )
}