<template lang="html">
  <ul>
    <li>
     <router-link to="/stacks" class="brand">
       Lizzard Flash
     </router-link>
    </li>
    <li >
      {{user}}
    </li>
    <li>
      <button @click='signOut' class='btn btn-warning pull-right'>Sign out</button>
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
    font-size: 1.5em;
    font-weight: 400;
    text-transform: uppercase;
  }

</style>
