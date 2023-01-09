<template>
    <h1>Ayant droits</h1>
    <div class ="container-all">
    <div class="container-search">
        <input type="text" v-model= "search" placeholder="Rechercher un ayant droit">
        <div class = "container-btn">
        <button @click = "$emit('toggle-add-filter')" class ="filter" ><img class ="svg svg-filter" src = "../assets/svg/filter-9.svg" alt ="">Filtrer</button>
            <button @click = "onClick"  class ="search">Rechercher</button>
        </div>
    </div>
    <button class ="export" ><img class ="svg svg-export" src = "../assets/svg/export.svg" alt ="">Exporter</button>
    </div>
</template>

<script scoped> 
export default {
    name: "Research", 
    emits: ['searching', 'toggle-add-filter'],
    data(){
        return{
            search: ''
        }
    },
    methods: {
        // here i want to send emit when i click on the button search and pass the value of the input to the parent component App.vue
        onClick(){
            this.$emit('searching')
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'Inter';
  src: url("../assets/fonts/Inter.ttf") format('truetype');
}

.container-all{
    display: flex;
    justify-content: space-between;
   
}

.container-search{
    display: flex;
}
button {
    padding: 6px 25px;
    align-items: center;
    margin-left: 15px;
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    border: none;
    cursor: pointer;
}

input[type=text]{
    color: black;
    font-size: 12px;
    padding: 4px 30px 4px 10px;
    font-family: 'Inter', sans-serif;
}
.svg{
    margin-right:   8px;
}

.filter{
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 6px 20px;
}

.search{
    background-color: #002C9C;
    color: white;
    font-weight: 550;
}

.container-btn{
    display: flex;
    margin-left: 20px;
}

.export{
    border: 1px solid  #002C9C;
    background-color: white;
    color:  #002C9C;
    padding: 6px 20px;

}

h1{
    font-size: 22px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 20px;
    margin-top: 0px;
}
</style>
