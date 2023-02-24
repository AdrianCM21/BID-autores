import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';

const Eliminar = ({id,eli}) => {
  const navigate = useNavigate();
    const eliminar=async(idAutores)=>{
        try {
            const autores = await axios.delete(`http://localhost:8000/api/autores/${idAutores}`);
            console.log(autores)
            Swal.fire(
                'Eliminado!',
                `El elemento sea eliminado correctamente`,
                'success'
              )
              eli(idAutores);
              navigate('/');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }


  return (
    <button className='btn btn-danger  ms-2 ' onClick={()=>eliminar(id)}>Eliminar</button>
  )
}

export default Eliminar