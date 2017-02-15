<template lang="html">
  <div class="front" @click='$parent.flipCard'>
    <div class="card-title">
      {{card.front}}
    </div>

    <div class="button-row">

    </div>

  </div>

</template>

<script>
export default {
  props: ['card']
}
</script>

<style lang="css" scoped>
  .front {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: relative;
  }

  .card-title {
    text-align: center;
    font-size: 180%;
    margin-top: 50px;
    margin-top: 20px;
  }
</style>
