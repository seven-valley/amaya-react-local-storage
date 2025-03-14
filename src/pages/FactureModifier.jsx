import { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Formfacture from "../components/forms/FormFacture.jsx";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Ligne from "../models/Ligne";
import {useFactureStore } from './FactureStore.js'
import {myFacturePdf} from "../components/pdf/myFacturePdf.js";
export default function factureModifier() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [facture, setFacture] = useState({});
  const [client, setClient] = useState({});
 
  const ht = useFactureStore((state) => state.ht)
  const ttc = useFactureStore((state) => state.ttc)
  const tva = useFactureStore((state) => state.tva)
  const lignes = useFactureStore((state) => state.lignes)
  const updateHT = useFactureStore((state) => state.updateHT)
  const updateLignes = useFactureStore((state) => state.updateLignes)
  
  const [amaya, setAmaya] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      const amaya2 = JSON.parse(data);
      setAmaya(amaya2);
      const objFacture = amaya2.facture.find((c) => c.id == id);
      //console.log("use Effect", obj);
      const cl = amaya2.client.find((c) => c.id == objFacture.client);
      setClient(cl);
      setFacture(objFacture);
      updateHT(objFacture.ht);
      updateLignes(objFacture.lignes)
     
      
    } else {
      // redirige
    }
  }, []);
const generatePDF=()=>{

  myFacturePdf(facture,client);
}
  const traiter = (data) => {
    const factureM = {
      ...data,
      id: new Date().getTime(),
      lignes: lignes,
      ht: ht
    };
    const indice = amaya.facture.findIndex((a) => a.id == id);
    amaya.facture[indice] = factureM;
    localStorage.setItem("amaya", JSON.stringify(amaya));
    navigate("/facture");
  };
  // const traiterLigne = (indice, ligne) => {
  //   console.log("traiter");

  //   lignes[indice] = ligne;
  //   let totalCalculer = 0;
  //   lignes.current.map((l) => {
  //     if (l.total.length > 0) {
  //       totalCalculer += parseFloat(l.total);
  //     }
  //   });
  //   const total2 = {};
  //   total2.ht = parseFloat(totalCalculer).toFixed(2);
  //   total2.ttc = parseFloat(totalCalculer) * 1.2;
  //   total2.tva = parseFloat(totalCalculer) * 0.2;
  //   setTotal(total2);
  // };
  const ajouterLigne = () => {
    const facture2 = { ...facture };
    facture2.lignes =lignes
    if (facture2.lignes.length < 4) {
      facture2.lignes.push(new Ligne());
      setFacture(facture2);
    } else {
      alert("4 lignes maximum");
    }
  };
  const effacer = (indice) => {
    const facture2 = { ...facture };
    facture2.lignes =lignes
    if (facture2.lignes.length > 1) {
      facture2.lignes.splice(indice, 1);
      setFacture(facture2);
    } else {
      alert("Il faut au moins une ligne");
    }
  };
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
        <section className="col-12">
        <div className="text-end">
        <button type="submit" onClick={generatePDF} className="mt-2 btn btn-danger">
        <i className="fas fa-file-pdf "></i>  <i className="fas fa-eye "></i>
          </button>
      
          </div>
          <div className="row mt-2 bg-gris p-2">
            <div className="col-4">
              <h4>{ht} &euro; HT</h4>
            </div>
            <div className="col-4">
              <h4>
                <span className="text-success">
                  {tva} &euro; TVA
                </span>
              </h4>
            </div>
            <div className="col-4 text-end">
              <h4>
                <span className="">{ttc} &euro; TTC</span>
              </h4>
            </div>
          </div>
        </section>
        {facture.id && (
          <Formfacture
            facture={facture}
            traiter={traiter}
           
            ajouter={ajouterLigne}
            effacer={effacer}
          />
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
