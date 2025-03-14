
import { create } from "zustand";
const updateMyLigne= (set,indice, ligne)=>{
    set((state) => {
      
        const state2 = { ...state }
        state2.lignes[indice] = ligne
        console.log(state2)
        if (ligne.total.length > 0){
            let totalCalculer = 0;
            state2.lignes.map( l=>{
                if (l.total.length > 0) {
                          totalCalculer += parseFloat(l.total);
                }
            })
            state2.ht = totalCalculer.toFixed(2);
            state2.tva = (totalCalculer*0.2).toFixed(2);
            state2.ttc = (totalCalculer*1.2).toFixed(2);
        }
        return state2 ;
      });
}
export const useFactureStore = create((set) => ({
    ht:'',
    ttc:'',
    tva:'',
    lignes:[],
    updateHT: (newHT) => set({ 
        ht: newHT , 
        ttc :(newHT*1.2).toFixed(2),
        tva :(newHT*0.2).toFixed(2),
     }),
    updateLignes: (newLignes) => set({ lignes: newLignes }),
    updateLigne: (indice,ligne) => updateMyLigne(set,indice, ligne),
  }));