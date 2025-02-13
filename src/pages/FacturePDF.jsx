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

  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      const amaya2 = JSON.parse(data);
      const obj = amaya2.facture.find((c) => c.id == id);
      setFacture(obj);
    } else {
      // redirige
    }
  }, []);
const generatePDF=()=>{
  myFacturePdf();
}
  return (
    <>
      <Nav active={"facture"}></Nav>
      
        <h1>{id}</h1>
        <button onClick={generatePDF}>PDF</button>
      <Footer></Footer>
    </>
  );
}
