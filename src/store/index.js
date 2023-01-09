import Vuex from 'vuex';
import table from './modules/table';
import filter from './modules/filter';
import Vue from 'vue'

// load vuex 

export default new Vuex.Store({
    modules : {
        table, 
        filter
    }
});

