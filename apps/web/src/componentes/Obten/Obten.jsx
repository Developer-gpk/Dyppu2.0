import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { List, Asesoria, Elaboracion, Entrega, Figura } from 'ui'

export default function Obten(){
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
            if(fade.getBoundingClientRect().top <= 679){
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
        <section className='block' id='obten'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='title'>
                        <h3><Image src={Figura} /> Obtén tus placas flexográficas de inmediato</h3>
                    </div>
                    <div className='tarjetas'>
                        <div className='placas'>
                            <div className={`tarjeta wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0s", "animationName": "fadeIn"})}>
                                <div className='icono'>
                                    <Image src={List} />
                                </div>
                                <div className='content'>
                                    <h4>Cuéntanos lo que necesitas</h4>
                                    <p>Llena nuestro <span>formulario y nos contactaremos contigo</span> para saber sobre qué <span>material vas a imprimir,</span> el tipo de <span>maquinaria</span> que utilizas y la <span>cantidad de grabados</span> que requieres.</p>
                                </div>
                            </div>
                            <div className={`tarjeta wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0.2s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeIn"})}>
                                <div className='icono'>
                                    <Image src={Asesoria} />
                                </div>
                                <div className='content'>
                                    <h4>Asesoramiento y cotización </h4>
                                    <p><span>Te asesoramos</span> sobre las mejores opciones en cuanto a la <span>elaboración de las placas flexográficas.</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='placas'>
                            <div className={`tarjeta wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0.4s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.4s", "animationName": "fadeIn"})}>
                                <div className='icono'>
                                    <Image src={Elaboracion} />
                                </div>
                                <div className='content'>
                                    <h4>Elaboración de diseño y preprensa</h4>
                                    <p>Una vez que nos <span>compartas tu diseño trabajamos la preprensa</span> y la <span>separación de color</span> para asegurar que el diseño quede perfecto.</p>
                                </div>
                            </div>
                            <div className={`tarjeta wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0.6s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.6s", "animationName": "fadeIn"})}>
                                <div className='icono'>
                                    <Image src={Entrega} />
                                </div>
                                <div className='content'>
                                    <h4>Entrega</h4>
                                    <p><span>Tus sellos flexográficos</span> quedarán listos en un <span>lapso de 24 a 48 horas</span> para ser entregados de <span>forma directa o enviados</span> a cualquier parte de la <span>República Mexicana.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}