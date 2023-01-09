<template>
    <header>
        <div class="container-logo-and-research">
        <div class="item-nav logo">LIBRIAL</div>
        <div class="item-nav research"><span><img src="../assets/svg/search.svg" color="red" alt="" class="svg-search"><input class = "research" type = "text" placeholder="Rechercher" @focusin="handlein" @focusout="handleout"></span></div>
        </div>
        <div class="item-nav user"><img src="../assets/svg/user.svg"  class="svg">Nom Prenom</div>
    </header>
</template>


<script>
export default {
    name: "Header", 
    
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: #002C9C;
    background-color: white;
    padding: 0px 30px;
}

.none{
    display: none;
}
.container-logo-and-research{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    
}

.research{
    border-left: 1px solid #E5E5E5;
    padding: 15px 0px;
    padding-left: 20px;
}

.research input{
    border: none;
    outline: none;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: black;
    font-weight: 500;
    padding: 5px 10px;
}

.logo{
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    margin: 0;
    color: #002C9C;
    font-weight: 600;
}
.svg-search{
}
.svg{
    margin-right: 8px;
}

 .user{
    display: flex;
    align-items: center;
    cursor: pointer;
}

 .user, .logo{
    padding-top: 10px;
    padding-bottom: 15px;
}

span {
    display: inline-flex;
    align-items: center;
    border: 1px solid #E5E5E5;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
}

input::-webkit-input-placeholder {
    font-weight: 500;
    line-height: 4;
}
</style>
