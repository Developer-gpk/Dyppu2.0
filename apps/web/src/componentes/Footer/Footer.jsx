import React from 'react'
import Image from 'next/image'
import { LogoGoplek } from 'ui'

export default function Footer(){

    const gaCtaGoplek = () => {
        let category = 'Abrir Goplek',
            action = 'Abrir Goplek',
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
        <section className='block' id='footer'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='text'>
                        <p>
                            Argeflex 2022 <br />
                            Todos los derechos reservados. <br />
                            Aviso de Privacidad
                        </p>
                    </div>
                    <div className='logo'>
                        <a href='https://www.goplek.com/' target="_blank" rel="noopener noreferrer" onClick={gaCtaGoplek}>
                            <Image src={LogoGoplek} alt='Diseño de placas flexográficas'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}