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
        <li class='card' v-for='card in cards' v-bind:id="card.key">
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

  methods: {
    deleteCard(key)  {
      const dbRef = firebase.database().ref().child(`${this.userId}/stacks/${this.stackId}`)
      const dbRefCards = dbRef.child('cards')
      dbRefCards.child(key).remove().then(()=>{
        var liToRemove = document.getElementById(key)
        liToRemove.remove()
      });
    }
  },

  created() {
    this.userId = this.$store.getters.userId
    this.stackId = this.$route.params.id
    this.$store.dispatch('setStackId', this.stackId)
    this.displayName = this.$store.getters.displayName

    this.cards = []

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
      this.$store.dispatch('setCards', this.cards)
    })
  }
}
</script>

<style lang="css" scoped>
  ul.cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-flow: stretch;
    flex-wrap: wrap;
    list-style: none;
  }

header {
  padding-bottom: 1em;
  text-align: center;
  margin-bottom: 1em;
}

header .lang {
  font-size: 1.7em;
}

header .comment {
  font-size: 1.7em;
}

.btn-practice {
  background-color: #c0392b;
  float: right;
  display: block;
  margin: auto;
  margin-right: 8vw;
}

</style>
