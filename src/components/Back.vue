<template lang="html">
  <div class='card back'>
    <div class='card-text to'>
      {{card.back}}
    </div>
    <div class='button-row'>
      <button class='btn btn-danger dont-know' @click='$parent.dontKnowIt'>Don't know it</button>
      <span>
        <button class='btn btn-success know' @click='$parent.knowIt'>Know it</button>
      </span>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    props: ['card']
  }
</script>

<style lang="css" scoped>
    .back {
      background-color: #bdc3c7;
    }

    .to {
      color: #2c3e50;
      background-color: #bdc3c7;
    }

    .button-row {
      background-color: #bdc3c7;
      position: absolute;
      bottom: 4vh;
      right: 4vh;
    }

    .dont-know {
      margin-right: 4vh;
    }

    .know-it {
      margin-right: 4vh;
    }
</style>
