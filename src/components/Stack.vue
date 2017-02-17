<template lang="html">
  <div class="stack">
    <app-header :user='displayName'></app-header>
    <header>
      <h2>{{title}}</h2>
      <div class='lang'>{{fromLang}} - {{toLang}}</div>
      <div class='comment'>{{comment}}</div>
    </header>
    <hr>
    <div class='button-row'>
      <router-link :to="'/practice/' + stackId" class='btn btn-lg btn-practice scaling-button '>Practice</router-link>
    </div>

    <div class='add-card-row'>
      <add-card></add-card>
    </div>

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
      title: '',
      fromLang: '',
      toLang: '',
      comment: '',
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
header {
  padding-top: 4vh;
  padding-bottom: 4vh;
  text-align: center;
  background-color: #7f8c8d;
  border: 1px solid #7f8c8d;
  border-radius: 20px;
  box-shadow: 5px 5px 2px #7f8c8d;
}

h2 {
  text-align: center;
  font-size: 6vw;
  letter-spacing: 2px;
  word-spacing: 4px;
  margin-bottom: 20px;
  background-color: #7f8c8d;
  color: #ecf0f1;
}

.lang {
  font-size: 2.5vh;
  margin-bottom: 0.8vh;
  background-color: #7f8c8d;
  color: #ecf0f1;
}

.comment {
  font-size: 2.8vh;
  background-color: #7f8c8d;
  color: #ecf0f1;
}

.btn-practice {
  background-color: #c0392b;
    float: right;
    display: block;
    margin: auto;
    margin-right: 8vw;
    height: 8vh;
    width: 14vw;
    color: #ecf0f1;
    font-weight: 400;
    font-size: 3vw;
}

.add-card-row {
  margin-top: 4vh;
  margin-bottom: 4vh;
  margin: 0 auto;
}

  .stack {
    padding: 20px;
  }

  .card-table {
      padding-top: 50px;
  }

  .cards {
    display: inline-block;
  }
</style>
