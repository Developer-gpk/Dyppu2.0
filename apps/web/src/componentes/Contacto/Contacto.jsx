import React from 'react'
import Image from 'next/image'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Img9, Reloj, Mapa, Figura3, Img10 } from 'ui'

export default function Contacto(){
    let schema = Yup.object().shape({
        nombre: Yup.string().required(),
        empresa: Yup.string().required(),
        ubicacion: Yup.string().required(),
        telefono: Yup.string().min(10).max(10).required(),
        email: Yup.string().email().required(),
        placa: Yup.mixed().required()
    })
    return(
        <section className='block' id='contacto'>
            <div className='cover'>
                <Image src={Img10} fill />
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
                                onSubmit={async (values, { setSubmitting }) =>{
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
                                      console.log(data)
                                    } catch (error) {
                                      console.log(error)
                                    }
                                }}
                            >
                                {props =>(
                                    <Form>
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
                                                <button type="submit">Enviar</button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className='more'>
                                <div className='horario'>
                                    <div className='icono'>
                                        <Image src={Reloj} />
                                    </div>
                                    <div className='content'>
                                        <h6>Horario de atención:</h6>
                                        <p>Lunes a viernes de 9:00 a 18:00</p>
                                    </div>
                                </div>
                                <div className="direccion">
                                    <div className='icono'>
                                        <Image src={Mapa} />
                                    </div>
                                    <div className='content'>
                                        <p>S. de, Heróica Puebla de Zaragoza, 72300, Camino antiguo a Manzanilla 68</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="imagen" data-aos="fade-left">
                            <div className='img'>
                                <Image src={Img9} fill />
                            </div>
                            <Image src={Figura3} className="figura3" />
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