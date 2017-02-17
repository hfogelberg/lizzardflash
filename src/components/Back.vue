<template lang="html">
  <div class='card back'>
    <div class='card-text to'>
      {{card.back}}
    </div>
    <div class='button-row'>
      <button class='btn btn-danger dont-know' @click='$parent.dontKnowIt'><img src="/assets/check-mark.svg" alt="Know it" style='icon'></button>
      <span>
        <button class='btn btn-success know' @click='$parent.knowIt'><img src="/assets/x-mark.svg" alt="Don´t know it" class='icon'></button>
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

    .icon {
      height: 8vh;
      background-color: #bdc3c7;
    }
</style>
