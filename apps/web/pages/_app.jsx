import React, { useEffect } from 'react'
import { ParallaxProvider } from "react-scroll-parallax"
import AOS from 'aos'
import '../src/styles/globals.scss'
import 'animate.css'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import "aos/dist/aos.css";

export default function MyApp({ Component, pageProps }){
    useEffect(() =>{
        AOS.init();
    },[])
    return(
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    )
}