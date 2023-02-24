import React from 'react'
import {Formik,Form,Field} from 'formik'
import { Link} from 'react-router-dom';

const Formulario = ({valorInicial,envio}) => {

    console.log(valorInicial)
  return (
    <>
        <Formik
        enableReinitialize={true}
        initialValues={valorInicial}
        onSubmit={envio}
        >
        {({   isValid, dirty })=>(
             <Form className=' col-sm-10 mb-5 mb-sm-2 container-form'>
                <div className="">
                    <Link className='btn btn-primary h-25' to={'/'}>volver</Link>
                </div>
             <div className="container-principal form">
                <div className="titulocontainer">
                    <div className="card">
                        <h5 className="card-header">Formulario</h5>
                        <div className="card-body">
                            <h5 className="card-title">Autor</h5>
                            <Field name="nombre" className="form-control "  placeholder="Name" />
                            <button className="btn btn-primary mt-5" disabled={!(isValid&&dirty)}>Guardar</button>
                        </div>
                    </div>                    
                </div>
                
             </div>
         </Form>
        )}
        </Formik>  
    </>
  )
}

export default Formulario