<template lang="html">
  <ul class='card'>
    <li class='front'>{{card.front}}</li>
    <li class='back'>{{card.back}}</li>
    <li class='button-row'>
      <ul class='buttons'>
        <li><img src='/assets/svg/check-mark.svg'/></li>
        <li><img src='/assets/svg/pencil.svg' alt='edit' /></li>
        <li><button @click='$parent.deleteCard(card.key)' class='card-button'><img src='/assets/svg/trash.svg' alt='delete' /></button></li>
      </li>
    </ul>
  </ul>
</template>

<script>
  export default {
    props: ['card']
  }
</script>

<style lang="css" scoped>
  .card {
    list-style: none;
    margin: 1em;
    flex: 1;
    color: #ecf0f1;
    background-color: #3498db;
    width: 15em;
    height: 10em;
    max-width: 26em;
    max-height: 18em;
    justify-content: space-between;
    position: relative;
    border-radius: 20px;
  }

  .front {
    text-align: center;
    font-size: 1.8em;
    font-weight: 300;
  }

  .back {
    text-align: center;
    font-size: 1.5em;
    font-weight: 300;
  }

  .button-row {
    position: absolute;
    bottom: 0;
  }

  ul.buttons  {
    display: flex;
    list-style: none;
    width: 15em;
    padding: 0 0.5em 0.2em 0.5em;
  }

  ul.buttons li {
    flex: 0 0 auto;
  }

  img {
    height: 1.8em;
    width: auto;
    margin-right: 0.5em;
  }

  .buttons  li:nth-child(1) {
    margin-right: auto;
  }

</style>
