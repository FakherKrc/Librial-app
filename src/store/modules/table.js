

const state = {
    ayantdroits : [],
    checked :  [], 
    checkedMap : new Map(),
    numberItems : 20, 
    loader : 10,
    currentColSorted : "",
    currentSortType :"",
    currentQuery: "http://localhost:3000/AyantDroits",
    $_INCREMENT : 20, 
    isLoading : false, 
    isFiltering : false, 
    noMoreLoad : false
    
    
    
}; 

const getters  ={
    allAyantdroits : (state) => state.ayantdroits,
    allChecked : (state) => state.checkedMap,
    numberItems : (state) => state.numberItems,
    allLoader : (state) => state.loader,
    currentColSorted : (state) => state.currentColSorted,
    isFiltering : (state) => state.isFiltering,
    isLoading : (state) => state.isLoading,


};

const actions = {
    async loadAyantdroits({commit}){
        if( !state.noMoreLoad && (!state.isLoading || state.isFiltering)){
      
        commit('fetchLoading', true)

        commit('fetchLoader', true)
        let operator = ''
        if(state.currentQuery == 'http://localhost:3000/AyantDroits'){
            operator = '?'
        }else{
            operator = '&'
        }
        let query = state.currentQuery + `${operator}_limit=${state.$_INCREMENT}&_start=${state.numberItems- state.$_INCREMENT}`
        console.log(query)
        const response = await fetch(query);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await response.json()

        if(res.length != 0){
            commit('loadAyantdroits', res)
            commit('fetchChecked')
            commit('fetchNumberItems')
            commit('fetchLoader', false)
            commit('sortLoad')
            commit('fetchLoading', false)
        }else{
           
            commit('fetchLoader', false)
            commit('fetchNoMoreLoad',true)
            commit('fetchLoading', false)
        }
        }
    }, 


    sortColumn({commit}, field){
      commit('sortObjectArray', field)
    }, 
    // i want to create a function that take fields array and do filter on ayantdroits array
    async filterAyantdroits({commit}, fields){
        if(!state.isFiltering ){
        commit('fetchFiltering', true)
       let query = `http://localhost:3000/AyantDroits?`
       let arrayApi = ['identifiant', 'solde', 'montant_contrat']
         fields.forEach((field, index) => {
            
            if(Object.values(field)[0] != '' && Object.keys(field)[0].slice(-3) == 'Min'  ){
                if(Object.keys(field)[0].slice(0, -3) == 'solde')
                {
                    query += `${arrayApi[1]}_gte`
                }else{
                    query += `${arrayApi[2]}_gte`
                }
                query += `=${Object.values(field)[0]}&`
            }else if(Object.values(field)[0] != '' && Object.keys(field)[0].slice(-3) == 'Max'  ){
                if(Object.keys(field)[0].slice(0, -3) == 'solde')
                {
                    query += `${arrayApi[1]}_lte`
                }else{
                    query += `${arrayApi[2]}_lte`
                }
                query += `=${Object.values(field)[0]}&`
            }else if(Object.values(field)[0] != '' && Object.keys(field)[0] == 'identifiant'){
                query += `id=${Object.values(field)[0]}&`
            }
        } 
        
        )
        if(query.slice(-1) == '&' || query.slice(-1) == '?'){
            query = query.slice(0, -1)
        }
        commit('fetchQuery', query)
        commit('resetState')
        await actions.loadAyantdroits({commit}) 
        commit('fetchFiltering', false)    
    }


}
  
};

const mutations = {
    loadAyantdroits : (state, ayantdroits) => state.ayantdroits = [...state.ayantdroits,...ayantdroits],
    fetchChecked : (state) => { 
          
            for(let i = state.numberItems - state.$_INCREMENT; i < state.ayantdroits.length; i++){
                console.log(state.ayantdroits) 
                console.log("****calcul**** = "  + state.checkedMap)
                
                state.checkedMap.set(Object.values(state.ayantdroits)[i].id, false)
            }
            console.log(state.checkedMap)
            
        
    },
    fetchLoading : (state, bool) => state.isLoading = bool,
    fetchNumberItems : (state) => state.numberItems  +=  state.$_INCREMENT,
    fetchLoader : function(state, boolLoading) {
        if(boolLoading &&state.numberItems ==  state.$_INCREMENT){
            state.loader = 10
        }else if(boolLoading){
            
            state.loader = 3
        }else{
            state.loader = 0
        }
     
    }, 
    fetchFiltering : (state, bool) => state.isFiltering = bool,
    sortLoad : function(state){
        let n= 0
        n = state.currentSortType == 'ASC' ? n= 1 : n = -1
        if(state.currentSortType != ""){  
            state.ayantdroits.sort((a, b) => {  
                if(a[state.currentColSorted] > b[state.currentColSorted]){
                    return n
                }else if(a[state.currentColSorted] < b[state.currentColSorted]){
                    return -n
                }else{
                    return 0
                }
            })
            
        }
    },
    fetchNoMoreLoad : (state, bool) => state.noMoreLoad = bool,
    sortObjectArray : function(state, field) {
        if(state.currentColSorted == field){
            if(state.ayantdroits[0][field] < state.ayantdroits[1][field]){
                state.ayantdroits.sort((a, b) => {
            
                    if(a[field] > b[field]){
                        return -1
                    }else if(a[field] < b[field]){
                        return 1
                    }else{
                        return 0
                    }
                })
                state.currentSortType = 'ASC'
            }else{
                state.ayantdroits.sort((a, b) => {
            
                    if(a[field] < b[field]){
                        return -1
                    }else if(a[field] > b[field]){
                        return 1
                    }else{
                        return 0
                    }
                })
                state.currentSortType = 'DSC'
            }
        }else{
            state.ayantdroits.sort((a, b) => {
            
                if(a[field] < b[field]){
                    return -1
                }else if(a[field] > b[field]){
                    return 1
                }else{
                    return 0
                }
            })

            state.currentColSorted = field
            state.currentSortType =  'ASC'
        }
       
    }, 
    fetchQuery : (state, query) => state.currentQuery = query, 
    resetState : (state) => {
        state.ayantdroits = []
        state.checkedMap =  new Map()
        state.numberItems =  state.$_INCREMENT
        state.loader = 10
        state.currentColSorted = ""
        state.currentSortType = ""
        state.noMoreLoad = false

    }, 
    
    
}





export default {
    state, 
    getters, 
    actions, 
    mutations, 

}
