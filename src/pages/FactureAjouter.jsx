import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Facture from "../models/Facture"
export default function FactureAjouter() {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      const amaya = JSON.parse(data)
      const facture = new Facture(amaya.currentExercice)
      amaya.facture.push(facture)
      localStorage.setItem("amaya", JSON.stringify(amaya))
      
      navigate(`/facture-modifier/${facture.id}`);
    } else {
      // redirige
    }
  }, []);
  


return (
    <>
      
    </>
  );
}
