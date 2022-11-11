import React from 'react'
import Image from 'next/image'
import { Img5, Img6, Img7, Img8, Artboard, StackLine, Figura, Img5M, Img8M } from 'ui'

export default function Fabricacion(){
    return(
        <section className='block' id='fabricacion'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className="title">
                        <h3><Image src={Figura} /><span> Fabricamos placas flexográficas digitales y analógicas</span> para la impresión en distintos materiales:</h3>
                    </div>
                    <div className='imagenes'>
                        <div className='part-1'>
                            <div className='papel'>
                                <div className='imagen'>
                                    <Image src={Img5M} fill quality={100} className="movil" />
                                    <Image src={Img5} fill quality={100} className="desk" />
                                    <div className='content'>
                                        <h4>PAPEL</h4>
                                        <p>Placas flexográficas para impresión en papel</p>
                                    </div>
                                </div>
                            </div>
                            <div className='plastico'>
                                <div className='imagen'>
                                    <Image src={Img6} fill quality={100} />
                                    <div className='content'>
                                        <h4>PLÁSTICO</h4>
                                        <p>Placas flexográficas para impresión en bolsas plásticas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='part-2'>
                            <div className='tela'>
                                <div className='imagen'>
                                    <Image src={Img7} fill quality={100} />
                                    <div className='content'>
                                        <h4>TELA</h4>
                                        <p>Placas flexográficas para impresión en tela</p>
                                    </div>
                                </div>
                            </div>
                            <div className='carton'>
                                <div className='imagen'>
                                    <Image src={Img8} fill quality={100} className="desk" />
                                    <Image src={Img8M} fill quality={100} className="movil" />
                                    <div className='content'>
                                        <h4>CARTÓN</h4>
                                        <p>Placas flexográficas para impresión en cartón</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='others'>
                        <div className='text'>
                            <h4>Manejamos medidas que se adaptan a diferentes necesidades</h4>
                        </div>
                        <div className='tamaño'>
                            <div className='icon'>
                                <Image src={Artboard} />
                            </div>
                            <div className='text'>
                                <h4>Máximo de tamaño:</h4>
                                <span>150 cm x 105 cm.</span>
                            </div>
                        </div>
                        <div className='espesor'>
                            <div className='icon'>
                                <Image src={StackLine} />
                            </div>
                            <div className='text'>
                                <h4>Espesor:</h4>
                                <span>45 cm, 67 cm, 100 cm, 105 cm, 112 cm, 125 cm, 150 cm, 155 cm, 185 cm y 250 cm.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}