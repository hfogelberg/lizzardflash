<template>
  <div class="auth">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';

export default {
  name: 'auth',

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChanged');
      if(user) {
        this.user = user

        this.provider = user.providerData[0]
        let photo = this.provider.photoURL
        this.photo = photo

        this.$store.dispatch('setUser', user)
          .then(()=>this.$router.push('/stacks'))

      } else {
        console.log('No user');
      }
    })
  },

  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/stacks',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
