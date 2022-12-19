import React, { useEffect } from 'react'
import { ParallaxProvider } from "react-scroll-parallax"
import Script from 'next/script';
import AOS from 'aos'
import '../src/styles/globals.scss'
import 'animate.css'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import "aos/dist/aos.css";

export default function MyApp({ Component, pageProps }){
    useEffect(() =>{
        AOS.init({
            duration: 2000
        });
    },[])
    return(
        <ParallaxProvider>
            <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-LZK3427PE7`} />
            <Script id='script-analytics' strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-LZK3427PE7');
                `}
            </Script>
            <Component {...pageProps} />
        </ParallaxProvider>
    )
}