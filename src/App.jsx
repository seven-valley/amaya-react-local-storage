
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Client from './pages/Client'
import ClientAjouter from './pages/ClientAjouter'
import ClientModifier from './pages/ClientModifier'
import Exercice from './pages/Exercice'
import ExerciceAjouter from './pages/ExerciceAjouter'
import ExerciceModifier from './pages/ExerciceModifier'
import Facture from './pages/Facture'
import FactureAjouter from './pages/FactureAjouter'
import FactureModifier from './pages/FactureModifier'
import FacturePDF from './pages/FacturePDF'
import Login from './pages/Login'
import './App.css'

const router = createBrowserRouter([
  {path :"/", element:<Login />},
  {path :"/client", element:<Client />},
  {path :"/client-ajouter", element:<ClientAjouter />},
  {path :"/client-modifier/:id", element:<ClientModifier />},
  {path :"/exercice", element:<Exercice />},
  {path :"/exercice-ajouter", element:<ExerciceAjouter />},
  {path :"/exercice-modifier/:id", element:<ExerciceModifier />},
  {path :"/facture", element:<Facture />},
  {path :"/facture-ajouter", element:<FactureAjouter />},
  {path :"/facture-modifier/:id", element:<FactureModifier />},
  {path :"/facture-pdf/:id", element:<FacturePDF />},
  {path :"/dashboard", element:<Home />},

])

export default function App() {
  return (
    <>
      <RouterProvider 
 
      router={router}></RouterProvider>
    </>
  )
}

