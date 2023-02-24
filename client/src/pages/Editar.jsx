import React ,{useEffect,useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import Formulario from '../components/Formulario';

const Editar = () => {
    const navigate = useNavigate();
    const valorInicial={
        nombre:''
    }
    const { id } = useParams()
    const [autores, setAutores] = useState(valorInicial)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/autores/${id}`);
            setAutores(respuesta.data);
        }
        getData();

    }, [id])

    const envio= async (values,actions)=>{
        try {
            const respuesta = await axios.put(`http://localhost:8000/api/autores/${id}`,values)
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha actualizado ${respuesta.data.titulo} perfectamente!`,
                });

                navigate('/');
            }
            
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
    <Formulario valorInicial={autores} envio={envio}/>
  )
}

export default Editar