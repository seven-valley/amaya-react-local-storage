import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";


import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";
import {myFacturePdf} from "../components/pdf/myFacturePdf.js";
export default function facturePDF() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [facture, setFacture] = useState({});
  const [client, setClient] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      const amaya2 = JSON.parse(data);
      const obj = amaya2.facture.find((f) => f.id == id);
      const cl = amaya2.client.find((c) => c.id == obj.client);
      setFacture(obj);
      setClient(cl);
    } else {
      // redirige
    }
  }, []);
const generatePDF=()=>{

  myFacturePdf(facture,client);
}
  return (
    <>
      <Nav active={"facture"}></Nav>
      
        <h1>{id}</h1>
        <button onClick={generatePDF}>PDF</button>
      
    </>
  );
}
