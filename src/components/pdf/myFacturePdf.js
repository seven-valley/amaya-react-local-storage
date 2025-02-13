import jsPDF from 'jspdf';
import imageUrl from '../../assets/logo-sevenvalley.webp'
import open from '../../assets/facture-pdf/OpenSans-Regular.ttf'
import openB from '../../assets/facture-pdf/OpenSans-Bold.ttf'
export  const myFacturePdf=()=>{
 

 const pdf = new jsPDF();
  pdf.setProperties({
    title: "Request For Quotation"
  });
  pdf.addFont(open, "OpenSans-Regular", "normal");
  pdf.addFont(openB, "OpenSans-Bold", "normal");
  pdf.setFont("OpenSans-Bold");

  pdf.setFontSize(50);
  pdf.addImage(imageUrl, 'webp', 10, 5, 40, 12);
  pdf.text('REQUEST FOR QUOTATION', 150, 12);
  pdf.save(`RFQ.pdf`);
 // console.log( pdf.getFontList() )
}