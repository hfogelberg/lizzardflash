<template lang="html">
  <div class="new-stack">
    <app-header :user='displayName'></app-header>
    <h2>New Stack</h2>
      <input type="text" placeholder="Title" v-model='title'><br>
      <input type="text" placeholder="From language" v-model='fromLang'><br>
      <input type="text" placeholder="To language" v-model='toLang'><br>
      <textarea name="name" rows="8" cols="80" placeholder="Comment"v-model='comment'></textarea><br>
      <button type="button" name="button" @click='createStack' class='btn btn-newstack pull-right'>Create stack</button>
  </div>
</template>

<script>
import Header from './Header.vue'
import firebase from 'firebase'

  export default {
    data() {
      return {
        uid: '',
        displayName: '',
        title: '',
        fromLang: '',
        toLang: '',
        comment: ''
      }
    },

    watch: {
        'saveStackStatus': () => {}
    },

    components: {
      'app-header': Header
    },

    created() {
      let user = firebase.auth().currentUser
      if (user) {
        this.uid = user.uid
        this.displayName = user.displayName
      }
    },

    methods: {
    createStack() {
      let stack = {
        title: this.title,
        fromLang: this.fromLang,
        toLang: this.toLang,
        comment: this.comment
      }

      firebase.database().ref().child(this.uid + '/stacks').push(stack)
      .then((doc) => {
        this.$router.push('/stacks')
      })
      .catch((err)=>{
        console.log('Save stack err', err);
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .new-stack {
    width: 70%;
    margin: 0 auto;
    background-color: yello
  }

  input[type="text"] {
    width: 100%;
    height: 30px;
    display: block;
    margin : 0 auto;
    padding-left: 10px;
}

  textarea {
    width: 100%;
     display: block;
     margin : 0 auto;
     padding-left: 10px;
     padding-top: 10px;
  }

  .btn-newstack {
    border-radius: 80px;

  }
</style>
