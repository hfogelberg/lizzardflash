<template lang="html">
  <div class="stacks-page">
    <app-header :user='displayName'></app-header>
    <h2>Stacks</h2>
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
      displayName: ''
    }
  },

  watch: {
    'saveStackStatus': ()=> {},
    'saveStackStatus': ()=> {}
  },

  components: {
    'stack': StacklistItem,
    'app-header': Header
  },

  created() {
    let userId = this.$store.getters.userId
    this.displayName = this.$store.getters.displayName

    const dbRef = firebase.database().ref().child('stacks/' + userId)

    dbRef.on('value', (snap)=>{
      // console.log('snap', snap.val())
      snap.forEach((data)=>{
      let val = data.val().stack
      console.log(val);
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
