import { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import FormFacture from "../components/forms/FormFacture.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function FactureAjouter() {
 
  const [facture, setFacture] = useState({
    name:'',
    num:'',
    crea:'',
    sent:'',
    client:'',
    charges:'',
    lignes:[{ligne1:'',ligne2:'',ligne3:'',prix:'',qt:'',total:''}],
    });

  const [amaya, setAmaya] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      setAmaya(JSON.parse(data));
    } else {
      // redirige
    }
  }, []);
  const navigate = useNavigate();

  const traiter = (data) => {
    
    const facture2 = { ...data, id: new Date().getTime(),lignes:facture.lignes };
    console.log(facture);
    amaya.facture.push(facture2);
    localStorage.setItem("amaya", JSON.stringify(amaya));

    navigate("/facture");
  };
  const traiterLigne = (indice,ligne) => {
    const facture2 ={...facture}
  facture2.lignes[indice] = ligne;
  setFacture(facture2);
  }
const ajouterLigne = () => {
  const facture2 ={...facture}
  facture2.lignes.push({ligne1:'',ligne2:'',ligne3:'',prix:'',qt:'',total:''});
  setFacture(facture2);
}
const effacer=(indice)=>{
  const facture2 ={...facture}
  facture2.lignes.splice(indice,1);
  setFacture(facture2);
}

return (
    <>
      <Nav active={"facture"}></Nav>
      <div className="px-5 container bg-light pb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3">
            <li className="breadcrumb-item">
              <Link to={`/dashboard`} className="link-success">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/facture`} className="link-success">
                Liste des factures
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ajouter une facture
            </li>
          </ol>
        </nav>

        <h1 className="py-2">Ajouter une facture</h1>
       { facture.lignes.length >0 && <FormFacture traiter={traiter}  facture={facture} traiterLigne={traiterLigne}  ajouter={ajouterLigne} effacer={effacer}/> }
      </div>
      <Footer></Footer>
    </>
  );
}
