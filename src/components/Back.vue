<template lang="html">
  <div class='card back'>
    <div class='card-text to'>
      {{card.back}}
    </div>
    <div class='button-row'>
      <button class='dont-know' @click='$parent.dontKnowIt'><img src="/assets/svg/check-mark.svg" alt="Know it" style='icon'></button>
      <span>
        <button class='know' @click='$parent.knowIt'><img src="/assets/svg/x-mark.svg" alt="Don´t know it" class='icon'></button>
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
</style>
