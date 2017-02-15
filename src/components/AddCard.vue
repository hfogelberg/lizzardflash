<template lang="html">
  <div class='addCard'>
    <textarea name="name" rows="4" cols="40" v-model="front" placeholder="Front of card"></textarea>
    <textarea name="name" rows="4" cols="40" v-model="back" placeholder="Back of card"></textarea>
    <button @click="saveCard" class='btn btn-primary'>Save</button>
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
        back: this.back
      }

      const dbRef = firebase.database().ref().child(`stacks/${userId}/${stackId}`)
      dbRef.child('cards').push(card)

      this.front = ''
      this.back = ''
    }
  }
}
</script>

<style lang="css" scoped>

</style>
