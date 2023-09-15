import React from 'react'
import Template from '../src/template/Template'

const Gracias = () => {
    return (
        <Template>
            <section className="block thank-you">
                <div className="holder">
                    <div className="content">
                        <div className="text-wrapper">
                            <div className="text-one">Gracias, tu mensaje se envió correctamente.</div>
                            <div className='text-two'>En breve nos contactaremos contigo.</div>
                            <a href="/" className="back">Regresar</a>
                        </div>
                    </div>
                </div>
            </section>
        </Template>
    );
}

export default Gracias;