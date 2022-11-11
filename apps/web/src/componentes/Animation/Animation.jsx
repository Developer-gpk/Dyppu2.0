import React, { useState, useEffect, useRef }  from 'react'
import Image from 'next/image'
import { Figura } from 'ui'


export default function Animation(){
    const [ textoOne, setTextOne ] = useState(false)
    const [ textTwo, setTextTwo ] = useState(false)
    const [ textThree, setTextThree ] = useState(false)
    const bar = useRef(null)
    function move() {
        const animacion = bar.current
        let stepValue = 0;
        if(animacion.getBoundingClientRect().top <= 712){
            let id = setInterval(frame, 450);
            function frame() {
              if (stepValue == 100) {
                if(stepValue == 100){
                    setTextThree(true)
                }
                clearInterval(id)
                window.removeEventListener("scroll", move);
              } else {
                if(stepValue == 0){
                    setTextOne(true)
                }
                if(stepValue == 50){
                    setTextTwo(true)
                }
                animacion.style.width = (stepValue + 10) + "%";
                stepValue=(stepValue + 10);
              }
            }
        }

    }
    useEffect(() =>{
        move()
        window.addEventListener('scroll', move)
    }, [])
    return(
        <section className='block' id='utiliza'>
            <div className="holder">
                <div className="container-fluid">
                    <div className='title'>
                        <h4><Image src={Figura} /> Utilizar grabados flexográficos para la impresión de etiquetas y empaques permite:</h4>
                    </div>
                    <div className='row'>
                        <div className='content'>
                            <h6 className={`${textoOne ? "prueba" : ""}`}>Reducir costos de empaquetado</h6>
                        </div>
                        <div className='content'>
                            <h6 className={`${textTwo ? "prueba" : ""}`}>Mínimo desperdicio de materiales</h6>
                        </div>
                        <div className='content'>
                            <h6 className={`${textThree ? "prueba" : ""}`}>Producción en grandes volúmenes</h6>
                        </div>
                    </div>
                    <div className="progressbarWrapper">
                        <span id="greenBar" ref={bar}></span>
                    </div>
                </div>
            </div>
        </section>
    )
}