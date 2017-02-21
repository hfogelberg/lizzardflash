<template lang="html">
  <div class="practice">
    <header>
      <h2>{{stackName}}</h2>
      <router-link :to="'/stack/' + this.$store.getters.stackId" class='btn-back'><img src="/assets/svg/arrow-left.svg" alt="Go back" class='back-icon'></router-link>
    </header>

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
        randomCards: [],
        stackName: ''
      }
  },

  components: {
    'front': Front,
    'back': Back
  },

  created() {
    this.randomCards = this.$store.getters.randomCards
    this.stackName = this.$store.getters.stackName
    this.randomCards[0].show = true
  },

  methods: {
    knowIt() {
      let update = {
        knowIt: true
      }

      const ref = firebase.database().ref().child(`${this.userId}/stacks/${this.stackId}/cards/${this.cardId}`)
      ref.update(update)

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
  header {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  header h2 {
    color: #ecf0f1;
  }

  .btn-back {
    margin-left: 3em;
    height: 400%;
    width: auto;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 1em;
    width: 80vw;
    height: 80vw;
    max-width: 20em;
    max-height: 20em;
    border-radius: 10px;
    position: relative;
    border: 1 px solid black;
  }
</style>
