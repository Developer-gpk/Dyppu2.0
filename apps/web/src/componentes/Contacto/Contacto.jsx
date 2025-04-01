import React from 'react'
import Image from 'next/image'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Img9, Reloj, Mapa, Figura3, Img10, Contacto } from 'ui'

export default function Contacto(){

    const gaCtaSubmit = () => {
        let category = 'Enviar formulario',
            action = 'Enviar formulario',
            label = '';

        if ("function" === typeof gtag
            && "string" === typeof category
            && "string" === typeof action) {
            var object = {
                "event_action": action,
                "event_label" : label || ''
            };

            // Send to Google Analytics.
            gtag('event', category, object);

            // Print in console.
            if ("console" in window) {
                console.log(
                    'ga: [category: %s, action: %s, label: %s]',
                    category,
                    object['event_action'],
                    object['event_label']
                );
            }
        }
    }

    let schema = Yup.object().shape({
        nombre: Yup.string().required(),
        empresa: Yup.string().required(),
        ubicacion: Yup.string().required(),
        telefono: Yup.string().min(10).max(10).required(),
        email: Yup.string().email().required(),
        placa: Yup.mixed().required()
    })

    async function handleSubmit(values, { resetForm }){
        let statusMessage = document.querySelector('.block.contact .status-message'),
            wrapperForm = document.querySelector('.block.contact .wrapper-content-form');
    
        statusMessage.classList.remove('hidden');
        wrapperForm.classList.add('partial-hide');
        statusMessage.innerHTML = 
        `<div class="sending">
            <div class="message">
                <div class="text">Enviando mensaje...</div>
            </div>
        </div>`;

        try {
            const endpoint = `https://www.goplek.com/mailer/send-mail-v1.php`;
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `data=${JSON.stringify({
                    host: "argeflex.com.mx",
                    data: values,
                })}`,
            });
            const data = await res.text();

            setTimeout(() => {
                window.location = '/gracias'
            }, 1250);
        } catch (error) {
            console.log(error)

            setTimeout(() => {
                resetForm();
                statusMessage.innerHTML = 
                `<div class="error">
                    <div class="message">
                        <div class="text">Hubo un error, inténtalo más tarde.</div>
                    </div>
                </div>`;
                setTimeout(() => {
                    statusMessage.classList.add('hidden');
                    wrapperForm.classList.remove('partial-hide');
                }, 6000);
            }, 1250);
        }
    }

    return(
        <section className='block contact' id='contacto'>
            <div className='cover'>
                <Image src={Img10} fill alt='Diseño de placas flexográficas'/>
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='title'>
                        <h4>Escríbenos para cotizar tus placas flexográficas</h4>
                    </div>
                    <div className='row'>
                        <div className='form' data-aos="fade-right">
                            <Formik
                                initialValues={{
                                    nombre: "",
                                    empresa: "",
                                    ubicacion: "",
                                    telefono: "",
                                    email: "",
                                    placa: "",
                                    comentarios: ""
                                }}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {props =>(
                                    <Form>
                                        <div className="status-message hidden"></div>
                                        <div className="wrapper-content-form">
                                            <div className='row-form'>
                                                <div className='form-control-custom'>
                                                    <label htmlFor="nombre">Nombre</label>
                                                    <Field className={`${props.errors.nombre && props.touched.nombre ? ("isError") : null}`} type="text" name='nombre' />
                                                </div>
                                                <div className='form-control-custom'>
                                                    <label htmlFor="nombre">Nombre de la empresa</label>
                                                    <Field className={`${props.errors.empresa && props.touched.empresa ? ("isError") : null}`} type="text" name='empresa' />
                                                </div>
                                            </div>
                                            <div className='row-form'>
                                                <div className='form-control-custom'>
                                                    <label htmlFor="nombre">Ubicación</label>
                                                    <Field className={`${props.errors.ubicacion && props.touched.ubicacion ? ("isError") : null}`} type="text" name='ubicacion' />
                                                </div>
                                                <div className='form-control-custom'>
                                                    <label htmlFor="nombre">Teléfono</label>
                                                    <Field className={`${props.errors.telefono && props.touched.telefono ? ("isError") : null}`} type="text" name='telefono' />
                                                </div>
                                            </div>
                                            <div className='row-form'>
                                                <div className='form-control-custom'>
                                                    <label htmlFor="nombre">Correo electrónico</label>
                                                    <Field className={`${props.errors.email && props.touched.email ? ("isError") : null}`} type="email" name='email' />
                                                </div>
                                                <div className='form-control-custom'>
                                                    <label htmlFor="nombre">Placa para impresión en:</label>
                                                    <Field className={`${props.errors.placa && props.touched.placa ? ("isError") : null}`} name="placa" as="select">
                                                        <option defaultValue></option>
                                                        <option value="Bolsas de plástico">Bolsas de plástico</option>
                                                        <option value="Bolsas de papel">Bolsas de papel</option>
                                                        <option value="Sacos de rafia">Sacos de rafia</option>
                                                        <option value="Etiquetas">Etiquetas</option>
                                                        <option value="Cajas de cartón">Cajas de cartón</option>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className='row-form'>
                                                <div className='form-control-custom text-area'>
                                                    <label htmlFor="comentarios">Comentarios</label>
                                                    <Field as="textarea" name="comentarios" rows="10"></Field>
                                                </div>
                                            </div>
                                            <div className='row-form submit'>
                                                <div className='form-submit'>
                                                    <button type="submit" onClick={gaCtaSubmit}>Enviar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className='more'>
                                <div className='horario'>
                                    <div className='icono'>
                                        <Image src={Reloj} alt='Diseño de placas flexográficas'/>
                                    </div>
                                    <div className='content'>
                                        <h6>Horario de atención:</h6>
                                        <p>Lunes a viernes de 9:00 a 18:00</p>
                                    </div>
                                </div>
                                <div className="direccion">
                                    <div className='icono'>
                                        <Image src={Mapa} alt='Diseño de placas flexográficas'/>
                                    </div>
                                    <div className='content'>
                                        <p>Antiguo Camino a Manzanilla #68, Col. Joaquin Colombres, Puebla, Pue.</p>
                                    </div>
                                </div>

                                <div className="correo">
                                    <div className='icono'>
                                        <Image src={Contacto} alt='Diseño de placas flexográficas'/>
                                    </div>
                                    <div className='content'>
                                        <p>Contacto:</p>
                                        <p>ventas@argeflex.com.mx</p>
                                        <p>222 197 7805</p>
                                        <p>222 424 4646</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="imagen" data-aos="fade-left">
                            <div className='img'>
                                <Image src={Img9} fill alt='Diseño de placas flexográficas'/>
                            </div>
                            <Image src={Figura3} className="figura3" alt='Diseño de placas flexográficas'/>
                        </div>
                    </div>
                    <div className='end' data-aos="fade-up">
                        <p>En Argeflex somos especialistas en la fabricación de placas flexográficas de fotopolímero para la impresión flexográfica. Se utilizan para la impresión flexográfica sobre cartón corrugado, impresión flexográfica sobre plástico, impresión flexográfica sobre metal e impresión flexográfica sobre tela. Realizamos pedidos a todo México y ofrecemos asesoramiento personalizado para diseño y preprensa. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}