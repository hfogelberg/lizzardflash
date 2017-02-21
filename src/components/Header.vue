<template lang="html">
  <ul>
    <li>
     <router-link to="/stacks" class="brand">
       Lizzard Flash
     </router-link>
    </li>
    <li class='user'>
      {{user}}
      <button @click='signOut' class='btn-sign-out transparent-button'>Sign out</button>
    </li>
  </ul>
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

  ul {
    display: flex;
    list-style: none;
    align-items: center;;
  }

  li  {
    flex: 0 0 auto;
    margin: 2em;
  }

  li:nth-child(1) {
    margin-right: auto;
    text-decoration: none;
  }

  button {
    margin-top: -5px;
    margin-left: 10px;
  }

  .brand {
    text-decoration: none;
    font-size: 1.3em;
    font-weight: 400;
    text-transform: uppercase;
    color: #ecf0f1;
  }

  a {
    text-decoration: none;
    color: #ecf0f1;
  }

  a:link {
    text-decoration: none;
    color:#ecf0f1;
  }

  a:visited {
    text-decoration: none;
    color: #ecf0f1;
  }

  a:hover {
    text-decoration: none;
    color: #ecf0f1;
  }

  a:active {
    text-decoration: none;
    color: #ecf0f1;
  }

  button {
    color: #ecf0f1;
    margin-left: 1px;
  }

  .user {
    color: #ecf0f1;
  }
</style>
