<template lang="html">
  <ul>
    <li><textarea v-model="front" placeholder="Front of card" class='front'></textarea></li>
    <li>
      <textarea  v-model="back" placeholder="Back of card" class='back'></textarea><br>
      <button @click="saveCard" class='btn btn-add'>Save</button>
    </li>
  </ul>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      front: '',
      back: ''
    }
  },

  methods: {
    saveCard() {
      let userId = this.$store.getters.userId
      let stackId = this.$route.params.id

      let card = {
        front: this.front,
        back: this.back,
        knowIt: false,
        show: false
      }

      const dbRef = firebase.database().ref().child(`${userId}/stacks//${stackId}`)
      dbRef.child('cards').push(card)

      this.front = ''
      this.back = ''
    }
  }
}
</script>

<style lang="css" scoped>
  ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 2em;
  }

  textarea {
    padding: 0.5em;
    font-size: 1.2em;
    width: 30vw;
    height: 30vh;
    margin: 1em 2em 1em 0;
  }


  .btn-add {
    color: #ecf0f1;
    background-color: #e67e22;
  }

</style>
