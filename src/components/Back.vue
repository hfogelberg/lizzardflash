<template lang="html">
  <div class='card back'>
    <div class='card-text to'>
      {{card.back}}
    </div>
    <div class='button-row'>
      <button class='card-button dont-know' @click='$parent.dontKnowIt'><img src="/assets/svg/check-mark.svg" alt="Know it" style='icon'>Know it</button>
      <span>
        <button class='card-button know' @click='$parent.knowIt'><img src="/assets/svg/x-mark.svg" alt="Don´t know it" class='icon'>Don't know it</button>
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
      display: flex;
      position: relative;
    }

    .to {
      color: #2c3e50;
      background-color: #bdc3c7;
      font-size: 1.8em;
      font-weight: 400;
    }

    .button-row {
      justify-content: space-between;
      position: absolute;
      bottom: 0;
    }

    .dont-know {
      margin-right: 4vh;
    }

    .know-it {
      margin-right: 4vh;
    }

    img {
      margin-right: 0.5em;
    }

    button {
      font-size: 0.8em;
      color: #2c3e50;
    }
</style>
