import { useForm } from "react-hook-form";
import { useEffect,  useState,memo } from "react";
import LigneFacture from "./LigneFacture.jsx";
import { Link } from "react-router-dom";
import "./Formfacture.css";

const FormFacture = memo(function FormFacture(props) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("amaya");
    if (data) {
      //console.log(JSON.parse(data).client);
      setClients(JSON.parse(data).client);
      console.log(props.facture)
    }
   
  }, []);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:props.facture.name,
      num:props.facture.num,
      crea:props.facture.crea,
      sent:props.facture.sent,
     
      charges:props.facture.charges,
      
    },
  });
  const valider = (data) => {
    props.traiter(data);
  };

  const ajouter = () => {
    props.ajouter();
  };

  const effacer = (indice) => {
    console.log(indice);
    props.effacer(indice);
  };
  return (
    <>
      <form onSubmit={handleSubmit(valider)}>
        <div className="text-end">
 

          <button type="submit" className="btn btn-success my-4">
            Valider
          </button>
        </div>
        <section className="col-12">
         
          <div className="row mt-1">
            <div className="col-12 pt-2 gris">
              <div className="row h80">
                <div className="col-2">
                 
                  <div className="form-floating mb-3">
                    <input
                      {...register("num", {
                        required: "Saisir la référence",
                      })}
                      className={`form-control ${errors.num && 'is-invalid'}`}
                      id="num"
                    />
                    <label htmlFor="num">Référence</label>
                    
                  </div>
                  <span className="text-danger">
                    {errors.num && <p role="alert">{errors.num.message}</p>}
                  </span>
                </div>
                <div className="col-6">
                  
                  <div className="form-floating mb-3">
                    <input
                      {...register("name", {
                        required: "Saisir le descriptif",
                      })}
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      id="name"
                    />
                    <label htmlFor="num">Descriptif de la facture (ne s'affiche pas sur la facture)</label>
                  </div>
                  <span className="text-danger">
                    {errors.name && <p role="alert">{errors.name.message}</p>}
                  </span>
                </div>

                <div className="offset-2 col-2">
                 
                  <div className="form-floating">
               
                    <select
                       className={`form-control ${errors.client && 'is-invalid'}`}
                      {...register("client", {
                        //</div></div>defaultValue:props.facture.client,
                        required: "Choisir un client",
                      })}
                    
                      id="client"
                      aria-label="Client">
                     
                      {clients.map((client) => (
                        <option key={client.id} value={client.id} 
                         selected={props.facture.client == client.id ? true :false }
                        > 
                          {client.shortName} 
                        </option>
                      ))}
                    </select>
                    <label htmlFor="client">Client</label>
                  </div>
                 <span className="text-danger">
                    {errors.client && <p role="alert">{errors.client.message}</p>}
                  </span>
                </div>
                
                <div className="text-right pr-5 pt-3 col-2"></div>
              </div>
            </div>
            <div className="col-12 mt-1">
              <div className="row">
                <div className="col-4 pt-2 pb-3 gris2">
                
                  <div className="form-floating mb-3">
                    <input
                      {...register("crea", {
                        required: "Saisir la date",
                      })}
                      type="date"
                      className={`form-control ${errors.crea && 'is-invalid'}`}
                      id="crea"
                    />
                    <label htmlFor="crea">Création</label>
                  </div>
                  <span className="text-danger">
                    {errors.crea && <p role="alert">{errors.crea.message}</p>}
                  </span>
                </div>

                <div className="col-4 pt-2 gris">
                 
                  <div className="form-floating mb-3">
                    <input
                      {...register("sent")}
                      type="date"
                      className="form-control"
                      id="sent"
                    />
                    <label htmlFor="sent">Envoie</label>
                  </div>
                </div>
                <div className="col-4 pt-2 gris2">
                <div className="form-floating mb-3">
                    <input
                      {...register("charges")}
                      type="number"
                      className="form-control"
                      id="charges"
                    />
                    <label htmlFor="charges">Charges ou frais</label>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>

     { props.facture.lignes.map ((ligne,indice)=>(
      <LigneFacture 
     key={`id ${Math.random().toString(16).slice(2)}`} 
      //key={ligne.id} 
      ligne={ligne} 
      indice={indice} 
      effacer={effacer} />)) }
      <div className="col-12 mt-1 text-center">
          <button onClick={ajouter} className="mt-4 btn btn-success"><i className="fas fa-plus"></i></button>
        </div>
    </>
  );
})
export default  FormFacture;
