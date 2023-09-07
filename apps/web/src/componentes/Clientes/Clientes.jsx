import React from 'react'
import Image from 'next/image'
import { Logo1, Logo2, Logo3, Figura } from 'ui'

export default function Clientes(){
    return(
        <section className='block' id='clientes'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='title' data-aos="fade-left">
                        <h4><Image src={Figura} alt='Diseño de placas flexográficas'/> Algunos de los clientes que han confiado en nosotros</h4>
                    </div>
                    <div className='row' data-aos="fade-up">
                        <div>
                            <Image src={Logo1} alt='Diseño de placas flexográficas'/>
                        </div>
                        <div>
                            <Image src={Logo2} alt='Diseño de placas flexográficas'/>
                        </div>
                        <div>
                            <Image src={Logo3}  alt='Diseño de placas flexográficas'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}