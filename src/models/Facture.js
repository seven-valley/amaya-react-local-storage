import Ligne from "./Ligne"
export default class Facture{
        constructor (exercice){
        this.id = new Date().getTime()
        this.name=''
        this.num =''
        this.crea =''
        this.sent =''  
        this.client = ''
        this.charges = ''
        this.ht = 0.00
        this.lignes = []
        this.lignes.push(new Ligne())
        this.exercice = exercice
    }
}