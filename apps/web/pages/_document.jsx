import React, { useEffect } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default function Document(){
    useEffect(() =>{
        new WOW({
            boxClass: 'wow',
            animatedClass: 'animate__animated'
        }).init()
    },[])
    return (
        <Html lang='es-MX'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}