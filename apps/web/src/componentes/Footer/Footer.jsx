import React from 'react'
import Image from 'next/image'
import { LogoGoplek } from 'ui'

export default function Footer(){
    return(
        <section className='block' id='footer'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='text'>
                        <p>
                            Dyppu 2022 <br />
                            Todos los derechos reservados. <br />
                            Aviso de Privacidad
                        </p>
                    </div>
                    <div className='logo'>
                        <a href='https://www.goplek.com/'>
                            <Image src={LogoGoplek} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}