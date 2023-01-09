<template>
    <div>
        <table>
            <tr>
                <th class ="header-cell" >
                <img @click= "changeAllCheckedBox" class = "svg" :src = "this.headerChecked == true ? require('../assets/svg/box-checked.svg') : require('../assets/svg/box.svg')" alt = "">
                </th>
                <th  class ="header-cell nom" >Nom 
                <img class = "svg svg-pointed" @click = "sortColumn('nom')" src = "../assets/svg/sort.svg" alt = "">
                </th>
           
                <th class ="header-cell  prenom" >Prenom
                      <img class = "svg svg-pointed" @click = "sortColumn('prenom')" src = "../assets/svg/sort.svg" alt = "">
              
                </th>
          
                <th  class ="header-cell" >Solde releve N-1
                      <img class = "svg svg-pointed" @click = "sortColumn('solde_n_1')" src = "../assets/svg/sort.svg" alt = "">
              
                </th>
          
                <th class ="header-cell" >Montant des contrats
                      <img class = "svg svg-pointed" @click = "sortColumn('montant_contrat')" src = "../assets/svg/sort.svg" alt = "">
              
                </th>
         
                <th   class ="header-cell" >Solde
                      <img class = "svg svg-pointed" @click = "sortColumn('solde')" src = "../assets/svg/sort.svg" alt = "">
              
                </th>
                 <th class ="header-cell" >
            
                </th>
            </tr>
               <tr   v-for= "ayantdroit in allAyantdroits"  :key="ayantdroit.id">
             <td  class ="cell box" >
                <img v-on:click="onClick(ayantdroit.id)"  class = "svg" v-bind:src = "this.allChecked.get(ayantdroit.id) == true ? require('../assets/svg/box-checked.svg') : require('../assets/svg/box.svg')" alt = "">
                </td>
                <td class = "cell nom">
                    {{ayantdroit.nom}}
                </td>
                <td class ="cell prenom" >{{ayantdroit.prenom}}</td>
            
                <td class ="cell" >{{ayantdroit.solde_n_1}}</td>

                <td class ="cell" >{{ayantdroit.montant_contrat}}</td>
        
                <td class ="cell" >{{ayantdroit.solde}}</td>
          
                 <td class ="cell box" >
                <img class = "svg" src = "../assets/svg/arrow-left-table.svg" alt = "">
                </td>
            </tr>
               <tr v-for= "n in allLoader" :key = "n"   >
             <td  class ="cell box" >
                 <img  class = "svg" src = "../assets/svg/box.svg" alt = "">
                    </td>
                <td class = "nom cell">
                    <div class="loader"></div>
                      </td>
                <td class ="prenom cell" > <div class="loader"></div></td>
            
                <td class ="cell" > <div class="loader"></div></td>
        
                <td class ="cell" > <div class="loader"></div></td>
          
                <td class ="cell" > <div class="loader"></div></td>

               
                 <td class ="cell box" >
                     <img class = "svg" src = "../assets/svg/arrow-left-table.svg" alt = "">
             
                     </td>
            </tr>

               
        </table>
        
     
        

       

    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name : "Table", 
    computed : {
        ...mapGetters(['allAyantdroits', 'allChecked', 'numberItems', 'allLoader', 'isFiltering', 'isLoading']), 
       
    },
    data(){
        return {
            headerChecked : false, 
        }
    },
    methods : {
        ...mapActions(['loadAyantdroits', 'sortColumn']),
        
        
        onClick(id){
        this.allChecked.set(id, !this.allChecked.get(id))
        },
         changeAllCheckedBox() {
        if ([...this.allChecked.values()].every(element => element === false)) {
             this.headerChecked = true;
             this.allChecked.forEach((value, key) => this.allChecked.set(key, true));
     } else {
         this.headerChecked = false;
                this.allChecked.forEach((value, key) => this.allChecked.set(key, false));
  }     
}, 
        handleScroll() {

    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 150;
    if (bottomOfWindow && !this.isFiltering && !this.isLoading) {
      this.loadAyantdroits();
    }
  
}
    },
  
    created(){  
        if(!this.isFiltering && !this.isLoading){
            this.loadAyantdroits()
        }
    
    window.addEventListener('scroll', this.handleScroll)
    }, 
    unmounted(){
         window.removeEventListener('scroll', this.handleScroll)
    }, 

    

}
</script>

<style scoped>

*{
    box-sizing: border-box;
}

.svg {
    margin-left: 10px;
}
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
.header-cell{
    
    padding: 10px 15px;
    font-family: Inter, sans-serif;
    font-size: 9px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
   
}

.nom,  .prenom{
    padding-right: 60px;

}



.cell {
  
    padding: 15px 15px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 600;
    background-color: white;
    text-align: left;
}

tr:hover td{
    background-color: #32b2e3;    /*#ebeefc */
    cursor: pointer;
}


table {
    
    border-spacing: 0 3px;
    margin-top: 15px;
    width: 100%;

}

.loader{
    background-color: #ededed;
    height: 18px;
    width: 100%;
    border-radius: 6px;

}

td .loader {
    background-color: #ededed;
    background: linear-gradient(100deg, 
                                rgba(255, 255, 255, 0) 40%,
                                rgba(255, 255, 255, .5) 50%,
                                rgba(255, 255, 255, 0) 60%) #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}

@keyframes loading{
    to {
        background-position-x: -30%;
    }

}

.svg-pointed{
cursor: pointer
}

</style>
