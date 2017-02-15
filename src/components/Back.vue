<template lang="html">
  <div class='back'>
    <div class='card-title'>
      {{card.back}}
    </div>
    <div class='button-row'>
      <button class='btn btn-danger dont-know' @click='dontKnowIt'>Don't know it</button>
      <span>
        <button class='btn btn-success know' @click='knowIt'>Know it</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['card'],

    methods: {
          dontKnowIt() {
            this.$store.dispatch('nextCard')
          },

          knowIt() {
            this.card.knowIt = true
            this.$store.dispatch('editCard', this.card)
          }
    }
  }
</script>

<style lang="css" scoped>
  .back {
    height: 300px;
    width: 300px;
    border: 1px solid black;
    position: relative;
  }


    .card-title {
      text-align: center;
      font-size: 180%;
      margin-top: 50px;
      margin-top: 20px;
    }

    .button-row {
      position: absolute;
      bottom: 2px;
      right: 2px;
    }

    .dont-know {
      margin-right: 10px;
    }
</style>
