<template lang="html">
  <div class="stacks-page">
    <app-header :user='displayName'></app-header>
    <h2>Stacks</h2>

    <ul class='toolbar'>
      <li >
        <router-link to="newstack" class='btn-new-stack scaling-button '>
          <img src="/assets/svg/plus.svg" alt='new'/>New Stack
        </router-link>
      </li>
    </ul>

    <div class="sk-cube-grid" v-if='isLoading'>
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>

    <ul class='stacks'  v-else>
      <li v-for="stack in stacks">
        <stack :stack='stack'></stack>
      </li>
    </ul>

  </div>
</template>

<script>
import firebase from 'firebase'
import StacklistItem from './StacklistItem.vue'
import Header from './Header.vue'

export default {

  data() {
    return {
      stacks: [],
      displayName: '',
      userId: '',
      isLoading: true
    }
  },

  created() {
    this.userId = this.$store.getters.userId
    this.displayName = this.$store.getters.displayName
    if (this.userId !== '') {
      this.getStacks()
    } else {
      this.$router.push('/auth')
    }
  },

  methods: {
    getStacks() {
      const dbRef = firebase.database().ref().child(this.userId + '/stacks')

      dbRef.on('value', (snap)=>{
        this.isLoading = false
        snap.forEach((data)=>{
        let val = data.val()
        let stack = {
            key: data.key,
            title: val.title,
            fromLang: val.fromLang,
            toLang: val.toLang,
            comment: val.comment
          }
          this.stacks.push(stack)
        })
      })
    }
  },

  components: {
    'stack': StacklistItem,
    'app-header': Header
  }
}
</script>

<style lang="css" scoped>
  ul.toolbar {
    padding: 0 2em 5em 2em;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
  }

  img {
    margin-right: 1em;
  }

    ul.stacks {
      display: flex;
      flex-direction: row;
      flex-flow: stretch;
      flex-wrap: wrap;
      list-style: none;
    }
</style>
