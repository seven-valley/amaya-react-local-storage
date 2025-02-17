import jsPDF from "jspdf";
import logo1 from "../../assets/facture-pdf/logo3.jpg";
import iconMailG from "../../assets/facture-pdf/icon-mail.jpg";
import iconPhoneG from "../../assets/facture-pdf/icon-phone.jpg";
import iconWebG from "../../assets/facture-pdf/icon-www.jpg";
import iconInvG from "../../assets/facture-pdf/icon-inv.jpg";
import iconMobileG from "../../assets/facture-pdf/icon-mobile.jpg";
import triangleWhite from "../../assets/facture-pdf/triangle-white.jpg";
import iconCircle from "../../assets/facture-pdf/icon-circle.jpg";
import iconEuro from "../../assets/facture-pdf/icon-euro.png";
import iconAgenda from "../../assets/facture-pdf/icon-agenda.png";
import iconBarcode from "../../assets/facture-pdf/icon-barcode.png";
import iconEuroWhite from "../../assets/facture-pdf/icon-euro-w.png"; 


import open from "../../assets/facture-pdf/OpenSans-Regular.ttf";
import openB from "../../assets/facture-pdf/OpenSans-Bold.ttf";
export const myFacturePdf = (facture, client) => {
  const pdf = new jsPDF();
  const data = localStorage.getItem("amaya");
  const amaya = JSON.parse(data);
  if (data) {
    pdf.setProperties({
      title: "FACTURE ",
    });

    pdf.addFont(open, "OpenSans-Regular", "normal");
    pdf.addFont(openB, "OpenSans-Bold", "normal");

    //-----------------------------------------------
    // HAUT A GAUCHE
    //-----------------------------------------------
    const y = 4;
    pdf.addImage(logo1, "JPEG", 7, 4 + y, 20, 20);
    pdf.setFontSize(11);

    pdf.setTextColor(128, 128, 128);
    pdf.setFont("OpenSans-Regular");
    pdf.text(amaya.entreprise.name, 32, 9.5 + y);
    pdf.setFontSize(8);
    pdf.text(amaya.entreprise.address1, 32, 14 + y);
    pdf.text(amaya.entreprise.address2, 32, 18 + y);
    pdf.text(amaya.entreprise.country, 32, 22 + y);

    //-----------------------------------------------
    // HAUT CARTOUCHE DROIT
    //-----------------------------------------------

    pdf.addImage(iconMailG, "JPEG", 79, 11, 5, 3.3);
    pdf.text(amaya.entreprise.email, 79, 22);

    pdf.addImage(iconPhoneG, "JPEG", 114, 11, 4, 4);
    pdf.text(amaya.entreprise.tel, 114, 22);

    pdf.addImage(iconWebG, "JPEG", 149, 11, 4, 4);
    pdf.text(amaya.entreprise.www, 149, 22);
    
    // les lignes : _|_|_ ;)
    pdf.setFillColor(128, 128, 128);
    pdf.rect(79, 27, 100, 0.1, "F");
    pdf.rect(112, 10, 0.1, 16, "F"); // w :115 -3
    pdf.rect(147, 10, 0.1, 16, "F"); // w :150 -3

    pdf.setFontSize(44);
    pdf.setFont("OpenSans-Bold");
    pdf.text("FACTURE", 78, 41);

    //-----------------------------------------------
    // A L'INTENTION DE
    //-----------------------------------------------

    pdf.setFont("OpenSans-Regular");
    pdf.setFontSize(12);
    pdf.addImage(iconInvG, "JPEG", 9.5, 34, 10, 11);
    pdf.text("A L'INTENTION DE", 20, 43.5);
    // ligne de separation
    pdf.rect(9.5,46, 46, 0.1, "F");
    //-----------------------------------------

    //-----------------------------------------
    pdf.setFont("OpenSans-Bold");
    pdf.text(client.company, 10, 51);
    pdf.setFontSize(10);
    pdf.text(client.name, 10, 56);
    pdf.setFontSize(8);
    pdf.setFont("OpenSans-Regular");
    pdf.text(client.address1, 10, 61);
    pdf.text(client.address2, 10, 65);
    pdf.text(client.country, 10, 69);
    //-----------------------------------------
    const y2 =2
    pdf.addImage(iconMobileG, "JPEG", 11, 68.5+y2, 6, 6);
    pdf.text(client.tel, 17, 72.5+y2);
    pdf.addImage(iconMailG, "JPEG", 10, 76+y2, 5, 3.3);
    pdf.text(client.email, 17, 78.6+y2);
    // ligne de separation
    pdf.rect(9.5,84, 46, 0.1, "F");

    //-----------------------------------------------
    // PAVE VERT
    //-----------------------------------------------
    // les bulles
    pdf.addImage(iconCircle, "JPEG", 79,55,10,10);
    pdf.addImage(iconCircle, "JPEG", 112,55,10,10);
    pdf.addImage(iconCircle, "JPEG", 149,55,10,10);
    // les icones des bulles
    pdf.addImage(iconEuro, "PNG", 80.7,56.7,8,6.7);
    pdf.addImage(iconAgenda, "PNG", 114,56.5,8,6.7);
    pdf.addImage(iconBarcode, "PNG", 150,56,10,8.3);



    // Le rectangle VERT
    //-----------------------------------------------
    pdf.setFillColor(125, 187, 119);
    pdf.rect(79, 67, 100, 17, "F");
    //-----------------------------------------------
    
    // les triangles blancs
    pdf.addImage(triangleWhite, "JPEG", 81, 67, 5, 4.2);
    pdf.addImage(triangleWhite, "JPEG", 114, 67, 5, 4.2);
    pdf.addImage(triangleWhite, "JPEG", 151, 67, 5, 4.2); 

    // le contenu
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(8);
    pdf.text('Montant TTC', 82, 76);
    pdf.text('Date', 115, 76);
    pdf.text('Facture #', 150, 76);

    // les 3 valeur :
    
    pdf.addImage(iconEuroWhite, "JPEG", 81.7, 78 ,5,4.2); 
    pdf.setFont("OpenSans-Bold");
    pdf.setFontSize(13);
    pdf.text('22691.66', 86, 82);
    pdf.text('02-Oct-2024', 115, 82);
    pdf.text('SV24007', 150, 82);

  //-----------------------------------------------
  //-----------------------------------------------
  // LES PRODUITS PARTIE CENTRAL
  //-----------------------------------------------
  //-----------------------------------------------
  pdf.setTextColor(125,187,119);
  pdf.setFontSize(12);
  pdf.setFont("OpenSans-Regular");
  pdf.text('Produit', 10,104);
  pdf.text('Prix HT', 87,104);
  pdf.text('Quantité', 120,104);
  pdf.text('Total HT', 154,104);
 
  pdf.setFillColor(232,232,232); 
  pdf.rect(0, 105, 180, 17, "F");
  pdf.setFillColor(246,246,246); 
  pdf.rect(0, 122, 180, 17, "F");
  pdf.setFillColor(232,232,232); 
  pdf.rect(0, 139, 180, 17, "F");
  pdf.setFillColor(246,246,246); 
  pdf.rect(0, 156, 180, 17, "F");



  pdf.setFillColor(150,150,150); 
  pdf.rect(10,173,70,9,'F');

  //$pdf->SetTextColor(60,60,60);
  //-----------------------------------------------
  //-----------------------------------------------



    //-----------------------------------------------
    pdf.setFont("OpenSans-Regular");
    pdf.setFontSize(130);
    //  pdf.setTextColor(252,212,212);
    pdf.setTextColor(220, 220, 220);
    //  pdf.text('F A C T I C E',30,250,{angle:45});
    //-----------------------------------------------
    pdf.save(`Facture.pdf`);
    // console.log( pdf.getFontList() )
  }
};
