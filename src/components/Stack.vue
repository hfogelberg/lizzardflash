<template lang="html">
  <div class="stack">
    <app-header :user='displayName'></app-header>
    <h1>Stack</h1>

    <h2>Title {{stack.title}}</h2>
    <div>{{stack.fromLang}} - {{stack.toLang}}</div>
    <div>{{stack.comment}}</div>
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
          <tr v-for='card in cards'>
            <td>{{card.front}}</td>
            <td>{{card.back}}</td>
            <td>{{card.knowIt}}</td>
            <td><button @click="editCard(card._id)" class='btn btn-info'><i  class="glyphicon glyphicon-pencil"></i></button></td>
            <td><button @click="deleteCard(card._id)" class='btn btn-danger'><i  class="glyphicon glyphicon-trash"></i></button></td>
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
      stack: {},
      cards: []
    }
  },

  components: {
    'app-header': Header,
    'add-card': AddCard
  },

  created() {
    console.log('Stack');
    let userId = this.$store.getters.userId
    let stackId = this.$route.params.id

    this.displayName = this.$store.getters.displayName

    const dbRef = firebase.database().ref().child(`stacks/${userId}/${stackId}`)
    const dbRefCards = dbRef.child('cards')

    dbRef.on('value', (snap)=>{
      this.stack = snap.val().stack;
    })

    dbRefCards.on('value', (snap)=>{
      this.cards = snap.val()
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
