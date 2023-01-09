const state = {
    fields : [
        {identifiant : '', isActive : false },
        {soldeMin : '', isActive : false },
        {soldeMax: '', isActive : false },
        {contratMin: '', isActive : false },
        {contratMax: '', isActive : false},
        {annee : '', isActive : false},
        {search : '', isActive : false},
    ]   
}

const getters = {
    allFields : (state) => state.fields
}

const actions = {
    handleFocus({commit}, number){
        let bool = true
        commit('changeIsActive', {number, bool})
    }, 
    handleBlur(context, number){
        if(Object.values(context.state.fields[number])[0] == ''){
            let bool = false
            context.commit('changeIsActive', {number, bool})
        }         
    }, 
    removeFilter({commit}){
        commit('removeFilter')
    },
   

}

const mutations = {
    changeIsActive : function(state, {number, bool}) { state.fields[number].isActive= bool }, 
    removeFilter : (state) => state.fields.forEach(objects => {objects[Object.keys(objects)[0]] = ''; objects.isActive = false})
}


export default {
    state, 
    getters, 
    actions, 
    mutations
}