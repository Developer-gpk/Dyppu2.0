import React, { useEffect } from 'react'
import { ParallaxProvider } from "react-scroll-parallax"
import '../src/styles/globals.scss'
import 'animate.css'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function MyApp({ Component, pageProps }){
    return(
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    )
}