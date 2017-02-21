const state = {
  stackName: '',
  stackId: ''
}

const getters = {
  stackName:state => {
      return state.stackName
  },

  stackId:state=>{
    return state.stackId
  }
}

const mutations = {
  stackId:(state, stackId) =>{
      state.stackId = stackId
  },

  stackName:(state, name)=>{
    state.stackName = name
  }
}

const actions = {
  setStackname:({commit}, payload) => {
    commit('stackName', payload)
  },

  setStackId:({commit}, payload) => {
    commit('stackId', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
