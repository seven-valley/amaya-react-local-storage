import {Link} from 'react-router-dom';
export default function Login() {
  

  return (
    <>

    <div className="offset-4 col-3 mt-5">
      <div className="row mt-5">
         <div className="col-md-2 mt-5"><img src="./favicon.png" width="50"/></div>
         <div className="col-md-10 pl-4 pt-2 mt-5"><span className="h2 form-signin-heading">  Amaya</span></div>
      </div>
      
        <label htmlFor="inputEmail" className="mt-4">Login</label>
        <input id="inputEmail" type="email"  className="form-control mb-4"  />
        
        <label htmlFor="inputPassword" className="mt-2">Mot de Passe</label>
        <input id="inputPassword" type="password" className="form-control my-1" />
        <Link className="btn btn-lg btn-success btn-block mt-3" to={`/dashboard`}>Valider</Link> 
        

        </div>
    </>
  )
}
