<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
           <router-link to="/stacks" class="navbar-brand">
             Lizzard Flash
           </router-link>
         </div>

      <ul class='nav navbar-nav navbar-right'>
        <li class='user'>{{user}}<button @click='signOut' class='btn btn-warning pull-right'>Sign out</button></li></li>
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
        firebase.auth().signOut()
        this.$router.push('/auth')
      },
  },
}
</script>

<style lang="css" scoped>

  nav {
    padding-top: 20px;
    background-color: #fff;
    font-weight: 300;
    font-size: 120%;
    border-color: #fff;
  }

  button {
    margin-top: -5px;
    margin-left: 10px;
  }

  .user {
    margin-right: 20px;
  }
</style>
