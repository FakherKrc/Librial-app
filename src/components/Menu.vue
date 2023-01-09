<template>
    <div class="container-menu">
    <div class="container-compagny"><div class = "img-compagny"></div>Nom entreprise</div>
    <div class="container-items">
    <div class="menu-items active"><img  class="svg"  src ="../assets/svg/users.svg"/>Ayant droits</div>
    <div class="menu-items"><img  class="svg" src ="../assets/svg/contracts.svg"/>Contrats</div>
    <div class="menu-items"><img  class="svg" src ="../assets/svg/sales.svg"/>Ventes</div>
    <div class="menu-items"><img  class="svg" src ="../assets/svg/parameters.svg"/>Parameters</div>
    </div>
    </div>
</template>


<script>
export default {
    name : 'Menu'
}
</script>

<style scoped>
.container-compagny{
    display: flex;
    flex-direction: column;
    font-size: 14px; 
    font-family: 'Inter', sans-serif;
    color: #00370C;
    font-weight: 600; 
    text-align: center;
    padding: 35px 0px;
}
.img-compagny{
    height: 100px;
    width: 100px;
    margin: auto;
    margin-bottom: 10px;
    background-color: #E5E5E5;
}
.container-menu{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 300px;
    background-color: white;
    margin-left: 25px;
    min-height: 800px;

}
.container-items{
    display: flex;
    flex-direction: column; 
    width: 100%;
}

.menu-items{
    color : #00370C;
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15%;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    cursor: pointer;
    flex-grow: 1;
}
.svg {
    margin-right: 15px;
}

.active{
    background-color: #E9EFFF;
    border-left : 5px solid #002890;
}
</style>