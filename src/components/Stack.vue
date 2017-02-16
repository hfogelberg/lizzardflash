<template lang="html">
  <div class="stack">
    <app-header :user='displayName'></app-header>
    <h1>Stack</h1>

    <!-- <h2>Title {{stack.title}}</h2>
    <div>{{stack.fromLang}} - {{stack.toLang}}</div>
    <div>{{stack.comment}}</div>
    <hr> -->
    <router-link :to="'/practice/' + stackId" class='btn btn-lg btn-warning'>Practice</router-link>
    <hr>
    <add-card></add-card>
    <hr>
    <div class="table-responsive card-table">
      <table class='table table-bordered table-striped'>
        <thead>
          <tr>
            <td>Front</td>
            <td>Reverse</td>
            <td>Know it</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for='card in cards' v.bind:id="card.key">
            <td>{{card.front}}</td>
            <td>{{card.back}}</td>
            <td>{{card.knowIt}}</td>
            <td><button @click="editCard(card.key)" class='btn btn-info'><i  class="glyphicon glyphicon-pencil"></i></button></td>
            <td><button @click="deleteCard(card.key)" class='btn btn-danger'><i  class="glyphicon glyphicon-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
import Header from './Header.vue'
import AddCard from './AddCard.vue'

export default {
  data() {
    return {
      displayName: '',
      stackId: '',
      userId: '',
      stack: {},
      cards: []
    }
  },

  components: {
    'app-header': Header,
    'add-card': AddCard
  },

  created() {
    this.userId = this.$store.getters.userId
    this.stackId = this.$route.params.id
    this.$store.dispatch('setStackId', this.stackId)
    this.displayName = this.$store.getters.displayName

    const dbRef = firebase.database().ref().child(`${this.userId}/stacks/${this.stackId}`)
    const dbRefCards = dbRef.child('cards')

    dbRef.on('value', (snap)=>{
      this.stack = snap.val().stack;
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
  .stack {
    padding: 20px
  }

  .btn-practice {
      margin: 10px 20px 20px 0;
  }

  .card-table {
      padding-top: 50px;
  }

  .cards {
    display: inline-block;
  }
</style>
