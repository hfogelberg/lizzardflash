var shuffle = require('knuth-shuffle').knuthShuffle

const state = {
  cards: [],
  randomCards: [],
  cardIndex: 0
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
  }
}

const mutations = {
  cardIndex:(state, index)=>{

  },

  cards:(state, cards) => {
    state.cards=cards
  },

  randomCards:(state, payload) => {
    var randomCards = shuffle(payload.slice(0))
    randomCards[0].show = true
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
