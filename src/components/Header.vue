<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <ul class='nav navbar-nav navbar-right'>
        <li>{{user}}</li>
        <li class='user'><button @click='signOut' class='btn btn-warning pull-right'>Sign out</button></li></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
import {mapGetters} from 'vuex'

export default {
  props: ['user'],
  methods: {
      signOut() {
        console.log('signOut');
        firebase.auth().signOut()
        this.$router.push('/auth')
      },
  },
}
</script>

<style lang="css" scoped>

  nav {
      font-weight: 300;
      font-size: 120%;
  }

  .user {
    margin-right: 20px;
  }
</style>
