<template lang="html">
  <div class="stack">
    <router-link :to="'stack/' + stack.key">
      <div class='stack-title'>{{stack.title}}</div>
      <div class="stack-lang">{{stack.fromLang}} - {{stack.toLang}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['stack']
}
</script>

<style lang="css" scoped>
  .stack {
    flex: 1;
    max-width: 12em;
    max-height: 8em;
    margin: 1vw;
    background-color: #2ecc71;
    padding: 0.8em;

    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);
  }

  .stack-title {
    text-align: center;
    font-size: 1.8em;
    font-weight: 400;
    letter-spacing: 2px;
    word-spacing: 4px;
    color: #ecf0f1;
    margin-bottom: 0.8em;
  }

  .stack-lang {
    text-align: center;
    font-size: 1.2em;
    color: #ecf0f1;
  }

  .stack:hover {
    box-shadow: 0px 0px 150px #95a5a6;
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.1);
    transition: all 200ms ease-in;
    transform: scale(1.1);
  }

  a {
  text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

</style>
