var shuffle = require('knuth-shuffle').knuthShuffle

const state = {
  cards: [],
  randomCards: []
}

const getters = {
  cards:state=> {
    return state.cards
  },
  randomCards:state=>{
    return state.randomCards
  }
}

const mutations = {
  cards:(state, cards) => {
    state.cards=cards
  },

  randomCards:(state, payload) => {
    let randomCards = shuffle(payload.slice(0))
    console.log('randomCards', randomCards);
    state.randomCards = randomCards
  }
}

const actions = {
  setCards:({commit}, payload) => {
    commit('cards', payload)
    commit('randomCards', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
