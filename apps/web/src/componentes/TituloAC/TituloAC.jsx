import React from 'react'
import Image from 'next/image'
import { Figura } from 'ui'

export default function TituloAC(){
    return(
        <section className='block' id='tituloAC'>
            <div className='holder'>
                <div className='container-fluid'>
                    <h2><Image src={Figura} />Todo comienza con una placa flexográfica</h2>
                </div>
            </div>
        </section>
    )
}