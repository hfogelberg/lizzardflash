var shuffle = require('knuth-shuffle').knuthShuffle

const state = {
  cards: [],
  randomCards: [],
  cardIndex: 0,
  stackId: ''
}

const getters = {
  cardIndex:state => {
      return state.cardIndex
  },

  cards:state=> {
    return state.cards
  },
  randomCards:state=>{
    return state.randomCards
  },

  stackId:state=>{
    return state.stackId
  }
}

const mutations = {
  stackId:(state, stackId) =>{
      state.stackId = stackId
  },

  cardIndex:(state, index)=>{

  },

  cards:(state, cards) => {
    state.cards=cards
  },

  randomCards:(state, payload) => {
    var randomCards = shuffle(payload.slice(0))
    state.randomCards = randomCards
  }
}

const actions = {
  nextCard:({commit}) => {
    var cards = state.randomCards
    cards.forEach((card) => {
      card.show = false
    })

    state.cardIndex ++
    cards[state.cardIndex].show = true
    state.randomCards = cards
  },

  setCards:({commit}, payload) => {
    commit('cards', payload)
    commit('randomCards', payload)
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
