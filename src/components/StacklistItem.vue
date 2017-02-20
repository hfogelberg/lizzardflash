<template lang="html">
  <div class="stack">
    <router-link :to="'stack/' + stack.key">
      <h4>{{stack.title}}</h4><br>
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
    height: 10em;
    min-width: 12em;
    margin: 1em;
    background-color: rgb(169, 227, 30);

    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);
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
