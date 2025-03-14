import logo from '../assets/logo-sevenvalley.webp'
import './Footer.css'

export default function Footer() {
    return (
      <>
        <footer className="py-2 bg-dark">
      <div className="container px-5">
        <div className="row">
          <div className="col-6">
            <img
              src={logo}
              alt="Seven Valley SAS"
              width="150"
            />
          </div>
          <div className="col-6">
            <p className="mt-3 text-end text-white">
              Copyright &copy; Seven Valley / Jean-Fr&eacute;d&eacute;ric
              VINCENT
            </p>
          </div>
        </div>
      </div>
    </footer>
      </>
    )
  }
  