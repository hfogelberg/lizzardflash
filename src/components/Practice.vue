<template lang="html">
  <div class="practice">
    <h2>Practice</h2>
    <hr>

    <router-link :to="'/stack/' + this.$store.getters.stackId" class='btn btn-back'><img src="/assets/arrow-left.svg" alt="Go back" class='back-icon'></router-link>

    <ul class='cards-list'>
      <li class="list-unstyled random-card" v-for="card in randomCards" v-show="card.show">
        <div class='card' v-show="showFront" @click="flipCard"><front :card='card'></front></div>
        <div class='card' v-show="showBack"><back :card='card'></back></div>
      </li>
    </ul>
  </div>
</template>

<script>
import Front from './Front.vue'
import Back from './Back.vue'

export default {
  data() {
      return {
        showFront: true,
        showBack: false,
        randomCards: []
      }
  },

  components: {
    'front': Front,
    'back': Back
  },

  created() {
    this.randomCards = this.$store.getters.randomCards
    this.randomCards[0].show = true
  },

  methods: {
    knowIt() {
      // const dbRef = firebase.database().ref().child(`${this.userId}/stacks/${this.stackId}/cards/${this.cardId}`)
      // let update = {
      //   knowIt: true
      // }
      this.showFront = true
      this.showBack = false
        this.$store.dispatch('nextCard')
    },

    dontKnowIt() {
      this.showFront = true
      this.showBack = false
        this.$store.dispatch('nextCard')
    },

    flipCard() {
      this.showFront = false
      this.showBack = true
    }
  }
}
</script>

<style lang="css" scoped>
  .random-card {
    text-align: center;
  }

.back-icon {
  fill: #ff0000;
  height: 8vh;
}

</style>
