<template lang="html">
  <ul class='card'>
    <li class='front'>{{card.front}}</li>
    <li class='back'>{{card.back}}</li>
    <li class='button-row'>
      <ul class='buttons'>
        <li><img src='/assets/svg/check-mark.svg'/></li>
        <li><img src='/assets/svg/pencil.svg' alt='edit' /></li>
        <li><img src='/assets/svg/trash.svg' alt='delete' /></li>
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
    background-color: rgb(194, 176, 122);
    width: 15em;
    height: 10em;
    justify-content: space-between;
    position: relative;
  }

  .front {
    text-align: center;
    font-size: 2em;
    font-weight: 300;
  }

  .back {
    text-align: center;
    font-size: 1.7em;
    font-weight: 300;
  }

  .button-row {
    position: absolute;
    bottom: 0;
    /*display: flex;
    flex: 0 0 auto;
    margin-bottom: 0;*/
  }

  ul.buttons  {
    display: flex;
    list-style: none;
    width: 15em;
    padding: 0 0 0.2em 0.5em;
  }

  ul.buttons li {
    flex: 0 0 auto;
  }

  img {
    margin-right: 0.5em;
  }

  .buttons  li:nth-child(1) {
    margin-right: auto;
  }

</style>
