<template lang="html">
  <div class="stacks-page">
    <app-header :user='displayName'></app-header>
    <h2>Stacks</h2>

    <router-link to="newstack" class='btn btn-lg btn-new-stack pull-right scaling-button '>
      <i class="glyphicon glyphicon-plus scaling-button "></i>New Stack
    </router-link>
    <br>
    <br>
    <hr>

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

    <div class='stacks' v-for="stack in stacks" v-else>
      <stack :stack='stack'></stack>
    </div>

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
    .stacks {
      display: inline-block;
    }

    .btn-new-stack {
      background-color: #c0392b;
      color: #ecf0f1;
    }

    i {
      background-color: #c0392b;
    }
</style>
