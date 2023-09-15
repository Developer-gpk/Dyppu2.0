import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Parallax } from "react-scroll-parallax"
import { LogoDyppu, CoverDesktop, CoverMobile } from 'ui'

export default function Cover(){

    const gaCta = () => {
        let category = 'Cotizar ahora',
            action = 'Cotizar ahora',
            label = '';

        if ("function" === typeof gtag
            && "string" === typeof category
            && "string" === typeof action) {
            var object = {
                "event_action": action,
                "event_label" : label || ''
            };

            // Send to Google Analytics.
            gtag('event', category, object);

            // Print in console.
            if ("console" in window) {
                console.log(
                    'ga: [category: %s, action: %s, label: %s]',
                    category,
                    object['event_action'],
                    object['event_label']
                );
            }
        }
    }

    return(
        <section className='block' id='cover'>
            <div className='cover-desk'>
                <Parallax>
                    <Image src={CoverDesktop} fill priority alt='Diseño de placas flexográficas' quality={100} sizes="100vw" loading='eager' />
                </Parallax>
            </div>
            <div className='cover-mobile'>
                <Parallax>
                    <Image src={CoverMobile} fill priority alt='Diseño de placas flexográficas' quality={100} sizes="100vw" loading='eager' />
                </Parallax>
            </div>
            <div className='holder'>
                <div className='container-fluid' data-aos="fade-right">
                    <h1>Placas grabadas de fotopolímero para impresión flexográfica</h1>
                    <h2 className='hidden'>En Argeflex somos especialistas en el grabado de placas de fotopolimero para flexografía.</h2>
                    <Link href="/#contacto" onClick={gaCta}>
                        Cotiza ahora
                    </Link>
                </div>
            </div>
        </section>
    )
}