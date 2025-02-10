import {  useRef } from "react";
export default function LigneFacture(props) {
  const ligne1 = useRef('');
  const ligne2 = useRef('');  
  const ligne3 = useRef(''); 
  const prix = useRef(''); 
  const qt = useRef(''); 
  const total = useRef(''); 
  const changer =()=>{
    props.traiterLigne(props.indice,
      {ligne1: ligne1.current.value,
        ligne2: ligne2.current.value,
        ligne3: ligne3.current.value,
        prix: prix.current.value,
        qt: qt.current.value,
        total: total.current.value});
  }

const effacer=()=>{
  console.log('aaa')
  console.log(props.indice);
  props.effacer(props.indice);
}
  return (
    <>
      <div className="row mt-2">
        <div className="col-4 pt-2 pb-3 bg-gris">
          <label>Tâches</label>
          <div className="form-floating mt-4 mb-3">
            <input ref={ligne1}  onChange={changer} className="form-control" id="ligne1" defaultValue={props.ligne.ligne1} />
            <label htmlFor="ligne1">Ligne 1</label>
          </div>
          <div className="form-floating mb-3">
            <input ref={ligne2}  onChange={changer} className="form-control" id="ligne2" defaultValue={props.ligne.ligne2} />
            <label htmlFor="ligne2">Ligne 2</label>
          </div>
          <div className="form-floating mb-3">
            <input ref={ligne3}  onChange={changer} className="form-control" id="ligne3"  defaultValue={props.ligne.ligne3}/>
            <label htmlFor="ligne3">Ligne 3</label>
          </div>
        </div>
        <div className="col-2 pt-2 bg-gris2">
          <label className="mb-5">Prix</label>
          <div className="form-floating mt-5">
            <input ref={prix}  onChange={changer} className="form-control" id="prix"  defaultValue={props.ligne.prix}/>
            <label htmlFor="prix">Prix unitaire en €</label>
          </div>
        </div>

        <div className="col-2 pt-2 bg-gris">
          <label className="mb-5">Quantité</label>
          <div className="form-floating mt-5">
            <input ref={qt}  onChange={changer} className="form-control" id="qt"  defaultValue={props.ligne.qt} />
            <label htmlFor="qt">nb Heures ou nb Jours</label>
          </div>
        </div>
        <div className="col-2 pt-2 bg-gris2">
          <label className="mb-5">
            Total
          </label>
          <div className="form-floating mt-5">
            <input ref={total}  onChange={changer}  className="form-control" id="total"  defaultValue={props.ligne.total}/>
            <label htmlFor="total">total en €</label>
          </div>
        </div>
        <div className="col-2 pt-5 bg-gris">
          <br /><br /><br />
          <button onClick={effacer} className="mt-4 ms-5 btn btn-warning">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
