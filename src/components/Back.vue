<template lang="html">
  <div class='card back'>
    <div class='card-text to'>
      {{card.back}}
    </div>
    <ul class='button-row'>
      <li>
        <button class='transparent-button dont-know' @click='$parent.dontKnowIt'>
          <img src="/assets/svg/check-mark.svg" alt="Know it" style='icon'>Know it
        </button>
      </li>
      <li>
        <button class='transparent-button know' @click='$parent.knowIt'>
          <img src="/assets/svg/x-mark.svg" alt="Don´t know it" class='icon'>Don't know it
        </button>
      </li>
    </ul>
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

    ul.button-row {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
    }

    /*.button-row li:nth-child(1) {
      margin-right: auto;
    }*/

    .dont-know {
      padding-right: 0.5em;
    }

    .know-it {
      padding-left: 0.5em;
    }

    img {
      margin-right: 0.5em;
    }

    button {
      font-size: 0.8em;
      color: #2c3e50;
    }
</style>
