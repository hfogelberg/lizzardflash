<template>
  <div class="auth">
    <header>
      <h1>Lizzard Flash</h1>
      <h2>Sign up or log in</h2>
    </header>
    <div class='buttons'>
      <div id="firebaseui-auth-container"></div>
    </div>
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

<style scoped>
  .auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  header h1 {
    color: #ecf0f1;
    text-align: center;
  }

  header h2 {
    color: #ecf0f1;
    text-align: center;
    margin-bottom: 4em;
  }

  .buttons {
    justify-content: center;
    align-items: center;
  }
</style>
