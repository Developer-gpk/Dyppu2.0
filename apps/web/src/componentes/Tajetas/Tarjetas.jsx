import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Img2, Img3, Img4 } from 'ui'

export default function Tarjetas(){
    const [fadeOut, setFadeOut] = useState(false)
    const tarjeta = useRef(null)
    const Animation = () =>{
        const fade = tarjeta.current
        if(!fade) return
        if(screen.width <= 500){
            if(fade.getBoundingClientRect().top <= 1710){
                setFadeOut(true)
            } else{
                setFadeOut(false)
            }
        }else{
            if(fade.getBoundingClientRect().top <= 384){
                setFadeOut(true)
            } else{
                setFadeOut(false)
            }
        }
    }
    useEffect(() =>{
        Animation()
        window.addEventListener('scroll', Animation)
    }, [])
    return(
        <section className='block' id='tarjetas'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='title'>
                        <h2>35 años de experiencia en preprensa y en grabados.</h2>
                    </div>
                    <div className='tarjetas'>
                        <div className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""} tarjeta`} ref={tarjeta} data-wow-delay="0s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0s", "animationName": "fadeIn"})}>
                            <div className='imagen'>
                                <Image src={Img2} fill quality={100} alt='' />
                            </div>
                            <div className='title-card'>
                                <h3>PLACAS FLEXOGRÁFICAS DIGITALES Y ANALÓGICAS</h3>
                            </div>
                            <div className='description'>
                                <p>Somos una empresa dedicada a la producción de <span>placas flexográficas</span> en las dos maneras de fabricarlas: <span>digitales y analógicas,</span> que se utilizan para la <span>técnica de impresión en flexografía.</span></p>
                            </div>
                        </div>
                        <div className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""} tarjeta`} ref={tarjeta} data-wow-delay="0.2s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeIn"})}>
                            <div className='imagen'>
                                <Image src={Img3} fill quality={100} alt='' />
                            </div>
                            <div className='title-card'>
                                <h3>SERVICIO DE PREPRENSA</h3>
                            </div>
                            <div className='description'>
                                <p><span>Brindamos asesoramiento personalizado</span> para asegurar que el <span>diseño de las placas</span> cuente con características específicas para <span>impresión</span> y lograr un mejor resultado.</p>
                            </div>
                        </div>
                        <div className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""} tarjeta`} ref={tarjeta} data-wow-delay="0.4s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.4s", "animationName": "fadeIn"})}>
                            <div className='imagen'>
                                <Image src={Img4} fill quality={100} alt='' />
                            </div>
                            <div className='title-card'>
                                <h3>EXPERIENCIA</h3>
                            </div>
                            <div className='description'>
                                <p>Contamos con una amplia <span>lista de clientes</span> que nos han brindado su <span>confianza a lo largo de más de 35 años.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}