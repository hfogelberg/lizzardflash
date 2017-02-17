<template lang="html">
  <div class="card front" @click='$parent.flipCard'>
    <div class="card-text from">
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
    background-color: #3498db;
  }

  .from {
    background-color: #3498db;
    color: #ecf0f1;
  }
</style>
