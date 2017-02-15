<template lang="html">
  <div class="stack">
    <router-link :to="'stack/' + stack.key">
      <h4>{{stack.title}}</h4><br>
      <div>{{stack.fromLang}} - {{stack.toLang}}</div>
    </router>
  </div>

</template>

<script>
export default {
  props: ['stack']
}
</script>

<style lang="css" scoped>
  .stack {
    font-size: 16px;
    height: 120px;
    width: 200px;
    border: 2px black;
    color: #555;
    background-color: rgba(215, 221, 181, 0.72);
    padding: 10px;
    margin: 10px;
    box-shadow: 5px 5px 2px #555;
    border-radius: 15px;
  }
</style>
