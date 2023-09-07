import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../componentes/Footer/Footer'
import Navbar from '../componentes/Navbar/Navbar'

export default function Template({ children }){
    return(
        <>
            <Head>
                <title>Argeflex- Placas de fotopolímero para impresión flexográfica</title>
                <meta name="description" content='En Dyppu somos especialistas en impresión de placas flexográficas de fotopolímero para la impresión flexográfica.'></meta>
                <meta name="keywords" content='Especialistas en fabricación de placas flexográficas,
                                                placas flexograficas,
                                                placas para flexografia,
                                                placas de fotopolimero para flexografía grabados para flexografia,
                                                grabados flexográficos,
                                                grabados flexográficos digitales y análogos impresión de fotopolímeros flexográficos fotopolímeros flexográficos,
                                                grabados para flexografia,
                                                planchas de flexografía,
                                                CTP Flexo,
                                                imagenes de flexografia,
                                                preprensa flexo,
                                                pre prensa flexografica,
                                                placas de impresion flexografica,
                                                placas de polímero para flexografía,
                                                placas de impresion flexografica,
                                                placas de polímero para flexografía plancha de impresión flexográfica,
                                                sellos flexográficos,
                                                placas flexograficas,
                                                planchas para flexografía,
                                                placas cyrel analógica,
                                                placas cyrel digital,
                                                placas digitales cyrel,
                                                impresión de cyrel,
                                                grabados en cyrel,
                                                placas de cyrel impresas,
                                                preprensa cyrel,
                                                Impresión flexográfica,
                                                Diseño de placas flexográficas,
                                                placas de fotopolímero,
                                                cyrel flexografia,
                                                placas de fotopolímero,
                                                Grabados de Placas Planchas o Cyreles clisés en fotopolímero,
                                                placas grabadas de fotopolimero'></meta>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            
            <div className="whats d-none d-sm-none d-md-block">
                <ul>
                    <li className="whatsapp"><a href="https://wa.me/+522221977805" target="_blank" rel="noreferrer" className="icon-whatsapp"></a></li>
                    <li className="phone"><a href="tel:+52(222)4244646" target="_blank" rel="noreferrer" className="icon-number"></a></li>
                </ul>
            </div>
            <div className='outer-wrapper'>
                <h2 class='hidden'>En Argeflex somos especialistas en el grabado de placas de fotopolimero para flexografía.</h2>
                <Navbar />
                {children}
                <Footer />
            </div>
            <div className='button-sticky'>
                <Link href="/#contacto" legacyBehavior >
                    Cotiza ahora
                </Link>
            </div>
            
        </>
    )
}

