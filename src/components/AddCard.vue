<template lang="html">
  <div class='addCard'>
    <textarea name="name" v-model="front" placeholder="Front of card" class='front'></textarea>
    <textarea name="name"  v-model="back" placeholder="Back of card" class='back'></textarea>
    <br>
    <button @click="saveCard" class='btn btn-lg btn-add'>Save</button>
  </div>
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
  .addCard {
    display: inline-block;
    margin: 0 auto;
    padding-top: 4vh;
  }

  .front {
    margin-left: 5vw;
    width: 40vw;
    height: 30vh;
    font-size: 2.3vw;
    padding: 0.8vw;
  }

  .back {
    margin-right: 5vw;
    width: 40vw;
    height: 30vh;
    font-size: 2.3vw;
    padding: 0.8vw;
  }

  .btn-add {
    float: right;
    display: block;
    margin-top: 4vh;
    margin-right: 5vw;
    height: 8vh;
    width: 14vw;
    font-weight: 400;
    font-size: 3vw;
    color: #ecf0f1;
    background-color: #e67e22;
  }

</style>
