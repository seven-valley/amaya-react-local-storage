import { useEffect, useState } from 'react';
import Nav  from "../components/Nav.jsx";
import Footer  from "../components/Footer.jsx";
export default function Login() {
  const [amaya,setAmaya] = useState({});
  useEffect(() => {
    const data = localStorage.getItem('amaya');
    if(data){
      setAmaya(JSON.parse(data));
    }else{
      const obj ={client:[],facture:[],excercice:[],devis:[]}
      setAmaya(obj);
      localStorage.setItem('amaya',JSON.stringify(obj));
    }
  },[])
  return (
    <>
     <Nav active={'home'}></Nav>
     <div className="container bg-light ps-4">
      <h1 className="mt-5">Dashboard</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veniam debitis ratione sit, libero, iste voluptatem numquam nam quisquam natus voluptas, cumque voluptatum hic eveniet sapiente dolor accusamus aperiam tenetur.
     <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
     <br /> <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      
      </div>
     <Footer></Footer>
    </>
  )
}
