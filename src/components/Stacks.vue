<template lang="html">
  <div class="stacks-page">
    <app-header :user='displayName'></app-header>
    <h2>Stacks</h2>
    <pre></pre>
    <router-link to="newstack" class='btn btn-lg btn-new-stack pull-right'>
      <i class="glyphicon glyphicon-plus"></i>New Stack
    </router-link>
    <br>
    <br>
    <hr>

    <div class='stacks' v-for="stack in stacks">
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
      userId: ''
    }
  },

  created() {
    console.log('Created');
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
      console.log('Get Stacks');
      console.log('userId ' + this.userId);
      const dbRef = firebase.database().ref().child(this.userId + '/stacks')

      dbRef.on('value', (snap)=>{
        console.log(snap.val());
        snap.forEach((data)=>{
        let val = data.val()
        let stack = {
            key: data.key,
            title: val.title,
            fromLang: val.fromLang,
            toLang: val.toLang,
            comment: val.comment
          }
          console.log('stack', stack);
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
    i {
      margin-right: 3px;
    }

    .stacks {
      display: inline-block;
    }
</style>
