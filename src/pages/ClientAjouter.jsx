import { useEffect, useState } from 'react';
import Nav  from "../components/Nav.jsx";
import Footer  from "../components/Footer.jsx";
import FormClient  from "../components/forms/FormClient.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
export default function ClientAjouter() {
  const [amaya,setAmaya] = useState({});  
  useEffect(() => {
      const data = localStorage.getItem('amaya');
      if(data){
        setAmaya(JSON.parse(data));
      }else{
        // redirige
      }
    },[])
    const navigate = useNavigate();

  const traiter =(data)=>{
    const client = {...data,id:new Date().getTime()}
    console.log(client);
    amaya.client.push(client);
    localStorage.setItem('amaya',JSON.stringify(amaya));
    setAmaya({...amaya});
    navigate("/client");
  }
  const client ={
    company:'',
    name:'',
    shortName:'',
    tel:'',
    email:'',
    address1:'',
    address2:'',
    country:'',
  }
  return (
    <>
     <Nav active={'client'}></Nav>
     <div className="ps-5 container bg-light">
     <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3">
            <li className="breadcrumb-item">
            <Link
                  to={`/dashboard`} className="link-success">Home</Link>
            </li>
            <li className="breadcrumb-item">
            <Link
                  to={`/client`} className="link-success" >Liste des clients</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Ajouter un client</li>
          </ol>
        </nav>

      <h1 className="py-2">Ajouter un client</h1>
     <FormClient traiter={traiter} client={client} />
     
       
      </div>
    
    </>
  )
}
