<template lang="html">
  <div class="stack">
    <app-header :user='displayName'></app-header>
    <header>
      <h2>{{title}}</h2>
      <div class='lang'>{{fromLang}} - {{toLang}}</div>
      <div class='comment'>{{comment}}</div>
      <router-link :to="'/practice/' + stackId" class='btn btn-practice scaling-button '>Practice</router-link>
    </header>

    <div class='add-card-row'>
      <add-card></add-card>
    </div>

    <ul class="cards">
        <li class='card' v-for='card in cards' v.bind:id="card.key">
          <card :card='card'></card>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
import Header from './Header.vue'
import AddCard from './AddCard.vue'
import Card from './Card.vue';

export default {
  data() {
    return {
      displayName: '',
      stackId: '',
      userId: '',
      title: '',
      fromLang: '',
      toLang: '',
      comment: '',
      cards: []
    }
  },

  components: {
    'app-header': Header,
    'add-card': AddCard,
    'card': Card
  },

  created() {
    this.userId = this.$store.getters.userId
    this.stackId = this.$route.params.id
    this.$store.dispatch('setStackId', this.stackId)
    this.displayName = this.$store.getters.displayName

    const dbRef = firebase.database().ref().child(`${this.userId}/stacks/${this.stackId}`)
    const dbRefCards = dbRef.child('cards')

    dbRef.on('value', (snap)=>{
      this.title = snap.val().title
      this.fromLang = snap.val().fromLang
      this.toLang = snap.val().toLang
      this.comment = snap.val().comment
    })

    dbRefCards.on('child_added', (snap)=>{
        let val = snap.val()

        let card = {
          key:  snap.key,
          front: val.front,
          back: val.back,
          knowIt: val.knowIt,
          show: val.show
        }

        this.cards.push(card)

      // TODO handle remove
      this.$store.dispatch('setCards', this.cards)
    })
  }
}
</script>

<style lang="css" scoped>
  ul.cards {
    display: flex;
    flex-direction: row;
    flex-flow: stretch;
    flex-wrap: wrap;
    list-style: none;
  }

header {
  padding-top: 4vh;
  padding-bottom: 4vh;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3em;
}

header .lang {
  font-size: 2em;
}

header .comment {
  font-size: 2em;
}

.btn-practice {
  background-color: #c0392b;
  float: right;
  display: block;
  margin: auto;
  margin-right: 8vw;
}

</style>
