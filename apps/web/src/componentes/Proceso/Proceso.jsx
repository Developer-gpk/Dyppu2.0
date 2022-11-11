import React, { useState, useEffect, useRef } from 'react'

export default function Proceso(){
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
            if(fade.getBoundingClientRect().top <= 733){
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
        <section className='block' id='proceso'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='tecnologia'>
                            <div className='content'>
                                <h4>Contamos con <span>tecnología de última generación</span> en el procesado de <span>Fotopolímeros Flexográficos</span></h4>
                            </div>
                        </div>
                        <div className='ventajas'>
                            <div className="content">
                                <h5>Con nosotros tendrás:</h5>
                                <ul>
                                    <li className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0s", "animationName": "fadeIn"})}>Entrega inmediata</li>
                                    <li className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0.2s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeIn"})}>Calidad</li>
                                    <li className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0.4s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.4s", "animationName": "fadeIn"})}>Precios competitivos</li>
                                    <li className={`wow ${fadeOut ? "animate__animated animate__fadeIn" : ""}`} ref={tarjeta} data-wow-delay="0.6s" data-wow-offset="200" style={!fadeOut ? ({"visibility": "hidden", "animationDelay": "0s", "animationName": "none"}) : ({"visibility": "visible", "animationDelay": "0.6s", "animationName": "fadeIn"})}>Asesoría personalizada</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}