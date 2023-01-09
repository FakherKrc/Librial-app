<template>
    <div class ="container-filter">
    <div class ="second-container">
    <div v-bind:class="[allFields[0].isActive ? 'active' : '', 'filter', 'identifiant' ]">
    Identifiant
    <input type="text" v-model="allFields[0].identifiant" @focusin="handleFocus(0)" @focusout="handleBlur(0)"  >
    </div>
    <div v-bind:class="[allFields[1].isActive ? 'active' : '', 'filter', 'number' ]" >
    Solde min
    <span class="input-filter"  @focusin="handleFocus(1)" @focusout="handleBlur(1)" ><input  v-model="allFields[1].soldeMin" type="number" >€</span>
    </div>
    <div v-bind:class="[allFields[2].isActive ? 'active' : '', 'filter', 'number' ]">
    Solde max
    <span class="input-filter" @focusin="handleFocus(2)" @focusout="handleBlur(2)"><input v-model="allFields[2].soldeMax"  v-bind:min ="allFields[1].soldeMin" type="number" >€</span>
    </div>
    <div v-bind:class="[allFields[3].isActive ? 'active' : '', 'filter', 'number' ]">
    Contrats min
    <span class="input-filter" @focusin="handleFocus(3)" @focusout="handleBlur(3)"><input v-model="allFields[3].contratMin"  v-bind:max ="allFields[4].contratMax" type="number" >€</span>
    </div>
    <div v-bind:class="[allFields[4].isActive ? 'active' : '', 'filter', 'number' ]">
    Contrats max
    <span class="input-filter" @focusin="handleFocus(4)" @focusout="handleBlur(4)"><input v-model="allFields[4].contratMax"  v-bind:min ="allFields[3].contratMin" type="number" >€</span>
    </div>
    <div v-bind:class="[allFields[5].isActive ? 'active' : '', 'filter', 'date' ]">
    Date
    <input v-model="allFields[5].annee" type="date" @focusin="handleFocus(5)" @focusout="handleBlur(5)"  min="2000-01-01" max="2023-12-31">
    </div>
    </div>
    <button @click="removeFilter" class="btn-delete">
    <img src="../assets/svg/cross.svg">
    Supprimer les filtres</button>
    </div>
      
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
export default {

    name: "Filter" , 

     methods: {
        ...mapActions(['handleFocus', 'handleBlur', 'removeFilter']),

    },  
    computed: {
        ...mapGetters(['allFields'])
    }
    
}
</script>

<style scoped>

.active{
    color: black !important;
}

.active span{
    border: 1px solid black;
}

span:focus-within{
    border: 1px solid black;
    color: black;
}
span{
    display: inline-block;
    position: relative;
    z-index: 1;
    padding: 1px;
    
}
.container-filter{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
   
}

.second-container{
    display: flex;
    
}

.none{
    position : absolute;
}

.btn-delete{
    margin-top: 15px;
    color: white;
    background-color: #FF0000;
    font-weight: 600;
    border-radius: 20px;
    font-size: 10px;
    border: none;
    width: 150px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: 'Inter', sans-serif;
    
}
.filter{
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #8D8D8D;
    font-weight: 600;
    margin-left: 40px;
}

.input-filter{
    display: inline-block;
    border: 1px solid #A8A8A8;
    border-radius: 5px;
    background-color: white;
    padding-right: 10px;

}
.input-filter:focus{
       background:rgb(189, 189, 189);
    border-right:solid 8px rgba(170, 194, 31, 0) !important;
   
}
.identifiant{
    margin-left: 0px;
}

input:focus { 
    outline: none ;
    
 }
input{
    padding: 4px 4px;
    text-align: left;
    line-height: normal;
   

}

input[type="number"] {
  border: none;
  width: 90px;
  background-color: none;
  
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background: url('../assets/svg/date.svg') no-repeat;
    margin-left: 10px;
}


input[type="date"]::-webkit-datetime-edit {
    color: #A8A8A8;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
}
.active input[type="date"]::-webkit-datetime-edit {
    color: black;
    font-weight: 500;
  
    
}
.active input[type="date"]{
    border: 1px solid black;
}


input[type="date"]{
    width: 100px;
    height: 18px;
    border: 1px solid #A8A8A8;
    border-radius: 5px;
   
}


input[type="text"]{
    border: 1px solid #A8A8A8;
    width: 100px;
    border-radius: 5px;
    height: 18px;
}
input[type="text"]:focus{
    border: 1px solid black;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


</style>