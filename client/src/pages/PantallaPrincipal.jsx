import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Eliminar from '../components/Eliminar';

const PantallaPrincipal = () => {
    const [autores, setAutores] = useState([]);
    useEffect(() => {
       const Obtener = async ()=>{
            try {
                console.log(process.env.REACT_APP_API_URL)
                const autor = await axios.get(`http://localhost:8000/api/autores`);
                setAutores(autor.data);
            } catch (error) {
              console.log(error);   
            }
       }
       Obtener();
    }, [])
    const eliminar =(idm)=>{
       setAutores(autores.filter(e=> e._id !== idm)); 
    }
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Autor</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            autores.map((autor,idx)=>{
              return(<tr key={idx}>
                  <td>{autor.nombre}</td>
                  <td><Link className='btn btn-primary' to={`/editar/${autor._id}`}>Editar</Link> ||<Eliminar id={autor._id} eli={eliminar}/></td>
              </tr>)
            })
          }
        </tbody>  
    </table>
    <div>
        <Link className='btn btn-primary h-25' to={'/agregar'}>Añadir</Link>
      </div>
    </div>
  )
}

export default PantallaPrincipal