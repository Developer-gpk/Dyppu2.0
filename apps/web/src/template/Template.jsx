import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../componentes/Footer/Footer'
import Navbar from '../componentes/Navbar/Navbar'
import { useRouter } from 'next/router'
import Script from 'next/script'

export default function Template({ children }){

    const { pathname } = useRouter();

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

    const gaCtaPhone = () => {
        let category = 'Marcar teléfono',
            action = 'Marcar teléfono',
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

    const gaCtaWhatsapp = () => {
        let category = 'Abrir Whatsapp',
            action = 'Abrir Whatsapp',
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
            gtag_report_conversion('https://argeflex.com.mx/');

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
        <>
            <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=AW-11333563278`} />
            <Script id='script-analytics' strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-11333563278');
                `}
            </Script>
            {
                (pathname === '/gracias')
                    ?
                        <Script strategy="lazyOnload" id='form-conversion'>
                            {`
                                gtag('event', 'conversion', {'send_to':'AW-11333563278/ovJ8CLfkkuEYEI7noZwq'});
                            `}
                        </Script>
                    :
                        null
            }
            <Script strategy="lazyOnload" id='phone-conversion'>
                {`
                    gtag('config', 'AW-11333563278/9-p_CPOOk-EYEI7noZwq', { 'phone_conversion_number': '222 424 4646' }); 
                `}
            </Script>
            <Script id='analytics-conversion' strategy="lazyOnload">
                {`
                    function gtag_report_conversion(url) {
                        var callback = function () {
                            if (typeof(url) != 'undefined') {
                                console.log(url)
                            }
                        };
                        gtag('event', 'conversion', {
                            'send_to': 'AW-11333563278/_gyHCN_ZjeEYEI7noZwq',
                            'event_callback': callback
                        });
                        return false;
                    }
                `}
            </Script>

            <Head>
                <title>Argeflex- Placas de fotopolímero para impresión flexográfica</title>
                <meta name="description" content='En Dyppu somos especialistas en impresión de placas flexográficas de fotopolímero para la impresión flexográfica.'></meta>
                <meta name="keywords" content='Especialistas en fabricación de placas flexográficas, placas flexograficas, placas para flexografia, placas de fotopolimero para flexografía grabados para flexografia, grabados flexográficos, grabados flexográficos digitales y análogos impresión de fotopolímeros flexográficos fotopolímeros flexográficos, grabados para flexografia, planchas de flexografía, CTP Flexo, imagenes de flexografia, preprensa flexo, pre prensa flexografica, placas de impresion flexografica, placas de polímero para flexografía, placas de impresion flexografica, placas de polímero para flexografía plancha de impresión flexográfica, sellos flexográficos, placas flexograficas, planchas para flexografía, placas cyrel analógica, placas cyrel digital, placas digitales cyrel, impresión de cyrel, grabados en cyrel, placas de cyrel impresas, preprensa cyrel, Impresión flexográfica, Diseño de placas flexográficas, placas de fotopolímero, cyrel flexografia, placas de fotopolímero, Grabados de Placas Planchas o Cyreles clisés en fotopolímero, placas grabadas de fotopolimero'></meta>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            
            <div className="whats d-none d-sm-none d-md-block">
                <ul>
                    <li className="whatsapp"><a href="https://wa.link/gc3b72" target="_blank" rel="noreferrer" className="icon-whatsapp" onClick={gaCtaWhatsapp}></a></li>
                    <li className="phone"><a href="tel:+52(222)4244646" target="_blank" rel="noreferrer" className="icon-number" onClick={gaCtaPhone}></a></li>
                </ul>
            </div>
            <div className='outer-wrapper'>
                {
                    (pathname !== '/gracias')
                        ?
                            <Navbar />
                        :
                            null
                }
                {children}
                <Footer />
            </div>
            <div className='button-sticky'>
                <Link href="/#contacto" onClick={gaCta} >
                    Cotiza ahora
                </Link>
            </div>
            
        </>
    )
}

