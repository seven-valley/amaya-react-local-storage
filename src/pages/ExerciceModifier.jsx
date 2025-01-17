import { useEffect, useState } from 'react';
import Nav  from "../components/Nav.jsx";
import Footer  from "../components/Footer.jsx";
import FormExercice  from "../components/forms/FormExercice.jsx";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom'
export default function ExerciceModifier() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [exercice, setExercice] = useState({});
  const [amaya, setAmaya] = useState({});
  useEffect(() => {
      const data = localStorage.getItem('amaya');
      if(data){
      const amaya2=JSON.parse(data);
      setAmaya(amaya2);
      const obj =amaya2.exercice.find(c => c.id == id)
      //console.log(obj);
      setExercice(obj);
      }else{
        // redirige
      }
    },[])
    
  const traiter =(data)=>{
    const exercice = {...data,id:id}
    const indice =amaya.client.indexOf(c => c.id == id);
    amaya.exercice[indice] =exercice 
    localStorage.setItem('amaya',JSON.stringify(amaya));
    setAmaya({...amaya});
    navigate("/exercice");
  }
  return (
    <>
     <Nav active={'exercice'}></Nav>
     <div className="ps-5 container bg-light">
     <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3">
            <li className="breadcrumb-item">
            <Link
                  to={`/dashboard`} className="link-success" >Home</Link>
            </li>
            <li className="breadcrumb-item">
            <Link
                  to={`/exercice`} className="link-success" >Liste des exercices</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Ajouter un exercice</li>
          </ol>
        </nav>

      <h1 className="py-2">Modifier un exercice</h1>
    

 { 

exercice.id &&

     <FormExercice traiter={traiter} exercice={exercice}/>
 }
       
      </div>
     <Footer></Footer>
    </>
  )
}
