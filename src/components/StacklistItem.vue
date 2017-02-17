<template lang="html">
    <router-link :to="'stack/' + stack.key" class='stack-link'>
      <div class="stack">
        <h4>{{stack.title}}</h4><br>
        <div class="stack-lang">{{stack.fromLang}} - {{stack.toLang}}</div>
      </div>
  </router-link>
</template>

<script>
export default {
  props: ['stack']
}
</script>

<style lang="css" scoped>
  .stack {
    height: 20vh;
    width: 24vw;
    border: 2px black;
    color: #555;
    background-color: rgba(215, 221, 181, 0.72);
    padding: 0.8vw;
    margin: 1.2vw;
    box-shadow: 5px 5px 2px #555;
    border-radius: 15px;

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
    box-shadow: 0px 0px 150px #000000;
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

  h3 {
    font-size: 4vw;
  }

  .stack-lang {
      font-size: 2.5vw;
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

  @media only screen and (max-width: 767px) {
    .stack {
      margin: 0 auto;
      height: 30vh;
      width: 60vw;
      border: 2px black;
      color: #555;
      background-color: rgba(215, 221, 181, 0.72);
      padding: 10px;
      margin: 10px;
      box-shadow: 5px 5px 2px #555;
      border-radius: 15px;
    }

    h4 {
       font-size: 6vw;
    }

    .stack-lang {
        font-size: 4vw;
    }
  }
</style>
