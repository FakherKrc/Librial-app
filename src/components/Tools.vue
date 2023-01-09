<template>
    
    <div class = "container-tools">
        <h2>Liste des ayant droits</h2>
    <div class ="tools">
    <button class ="export-selected" ><img class ="svg svg-export-selected" src = "../assets/svg/export.svg" alt ="">Exporter la selection</button>
    <button class ="import" ><img class ="svg svg-import" src = "../assets/svg/import.svg" alt ="">Importer</button>
    <button class ="add" ><img class ="svg svg-add" src = "../assets/svg/add.svg" alt ="">Ajouter un ayant-droit</button>
    </div>
    </div>
</template>


<script>
export default {
    name: "Tools"
}
</script>


<style scoped>

h2{
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    margin: 0;
}
.tools{
    display: flex;
    flex-direction: row;
}

.container-tools{
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    

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

button{
    padding: 6px 25px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 15px;
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    border: none;
    cursor: pointer;
}

.add{
    background-color: #002C9C;
    color: white;
    font-weight: 600px;
   
}

.import{
    background-color: white;
    color: #002C9C;
    border: 1px solid #002C9C;

}

.export-selected{
    background-color: white;
    color: #002C9C;
    border: 1px solid #002C9C;

}

</style>l