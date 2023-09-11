import React from 'react'
import Image from 'next/image'
import { Img5, Img6, Img7, Img8, Artboard, StackLine, Figura, Img5M, Img8M } from 'ui'

export default function Fabricacion(){
    return(
        <section className='block' id='fabricacion'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className="title" data-aos="fade-right">
                        <h3><Image src={Figura} alt='Diseño de placas flexográficas'/><span> Fabricamos placas flexográficas digitales y análogas</span> para la impresión en distintos materiales:</h3>
                    </div>
                    <div className='imagenes'>
                        <div className='part-1'>
                            <div className='papel' data-aos="fade-left">
                                <div className='imagen'>
                                    <Image src={Img5M} fill quality={100} className="movil" alt='Diseño de placas flexográficas'/>
                                    <Image src={Img5} fill quality={100} className="desk" alt='Diseño de placas flexográficas'/>
                                    <div className='content'>
                                        <h4>PAPEL</h4>
                                        <p>Placas flexográficas para impresión en papel</p>
                                    </div>
                                </div>
                            </div>
                            <div className='plastico' data-aos="fade-right">
                                <div className='imagen'>
                                    <Image src={Img6} fill quality={100} alt='Diseño de placas flexográficas'/>
                                    <div className='content'>
                                        <h4>PLÁSTICO</h4>
                                        <p>Placas flexográficas para impresión en bolsas plásticas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='part-2'>
                            <div className='tela' data-aos="fade-left">
                                <div className='imagen'>
                                    <Image src={Img7} fill quality={100} alt='Diseño de placas flexográficas'/>
                                    <div className='content'>
                                        <h4>TELA</h4>
                                        <p>Placas flexográficas para impresión en tela</p>
                                    </div>
                                </div>
                            </div>
                            <div className='carton' data-aos="fade-right">
                                <div className='imagen'>
                                    <Image src={Img8} fill quality={100} className="desk" alt='Diseño de placas flexográficas'/>
                                    <Image src={Img8M} fill quality={100} className="movil" alt='Diseño de placas flexográficas'/>
                                    <div className='content'>
                                        <h4>CARTÓN</h4>
                                        <p>Placas flexográficas para impresión en cartón</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='others'>
                        <div className='text' data-aos="fade-up">
                            <h4>Manejamos medidas que se adaptan a diferentes necesidades</h4>
                        </div>
                        <div className='tamaño' data-aos="fade-up">
                            <div className='icon'>
                                <Image src={Artboard} alt='Diseño de placas flexográficas'/>
                            </div>
                            <div className='text'>
                                <h4>Máximo de tamaño:</h4>
                                <span>150 cm x 105 cm.</span>
                            </div>
                        </div>
                        <div className='espesor' data-aos="fade-up">
                            <div className='icon'>
                                <Image src={StackLine} alt='Diseño de placas flexográficas'/>
                            </div>
                            <div className='text'>
                                <h4>Espesor:</h4>
                                <span>".045", ".067", ".100", ".112", ".155" cm, y ".250".</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}