import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Formfacture from "../components/forms/FormFacture.jsx";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
export default function factureModifier() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [facture, setFacture] = useState({});
  const [amaya, setAmaya] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      const amaya2 = JSON.parse(data);
      setAmaya(amaya2);
      const obj = amaya2.facture.find((c) => c.id == id);
      setFacture(obj);
    } else {
      // redirige
    }
  }, []);

  const traiter = (data) => {
    const factureM = { ...data, id: new Date().getTime(),lignes:facture.lignes };
    const indice = amaya.facture.findIndex((a) => a.id == id);
    amaya.facture[indice] = factureM;
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
  console.log('aaa');
   console.log(indice);
  const facture2 ={...facture}
  console.log( facture2.lignes[indice]);
  facture2.lignes.splice(indice,1);
  console.log(facture2);
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
              Modifier une facture
            </li>
          </ol>
        </nav>

        <h1 className="py-2">Modifier une facture</h1>

        {facture.id && (
          <Formfacture
            facture={facture}
            traiter={traiter}
            traiterLigne={traiterLigne}
            ajouter={ajouterLigne}
            effacer={effacer}
          />
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
