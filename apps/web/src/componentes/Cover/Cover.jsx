import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Parallax } from "react-scroll-parallax"
import { LogoDyppu, CoverDesktop, CoverMobile } from 'ui'

export default function Cover(){
    return(
        <section className='block' id='cover'>
            <div className='cover-desk'>
                <Parallax>
                    <Image src={CoverDesktop} fill priority alt='' quality={100} sizes="100vw" />
                </Parallax>
            </div>
            <div className='cover-mobile'>
                <Parallax>
                    <Image src={CoverMobile} fill priority alt='' quality={100} sizes="100vw" />
                </Parallax>
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <h1>Placas grabadas de fotopolímero para impresión flexográfica</h1>
                    <Link href="/#contacto" legacyBehavior>
                        Cotiza ahora
                    </Link>
                </div>
            </div>
        </section>
    )
}