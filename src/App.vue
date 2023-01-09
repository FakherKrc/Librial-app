<template>
<Header />
<div class = "menu-and-table">
<Menu />
<div class="container">
<Research @searching="searching" @toggle-add-filter = "showCompFilter"/>
<Filter v-show="showFilter" />
<Tools />
<Table />
</div>
</div>
</template>

<script>

import Table from './components/Table.vue'
import Menu from './components/Menu.vue'
import Research from './components/Research.vue'
import Header from './components/Header.vue'
import Tools from './components/Tools.vue'
import Filter from './components/Filter.vue'
import {mapActions, mapGetters} from 'vuex';
import {isErrors} from './helpers/errors.js';

export default {
  name: 'App',
  data(){
    return {
      search: '',
      showFilter: false
    }
  }, 
  
  
  computed: {
    ...mapGetters(['allFields'])
  },
  components: {
       Table, 
       Research, 
       Tools, 
       Filter, 
       Menu, 
       Header
  }, 
  methods: {
    ...mapActions(['filterAyantdroits']),
    isErrors,
    showCompFilter(){
      console.log("showFilter")
      this.showFilter = !this.showFilter
    },
    // i have to check if filter are apply or search is apply
    searching(){
      const errors = this.isErrors(this.allFields)
      if(errors) {
        console.log(errors)
      }else{
         this.filterAyantdroits(this.allFields)
      }
      
    
    }
  }
}
</script>

<style>

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F2F4F7;
  }
  .menu-and-table{
    display: flex;
    margin-top: 40px;
  
  }
  .container {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 100%;
   
  }


</style>
