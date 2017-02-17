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
    border: 2px #2c3e50;
    color: #ecf0f1;
    background-color: #16a085;
    padding: 0.8vw;
    margin: 1.2vw;
    box-shadow: 5px 5px 2px #95a5a6;
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

  h3 {
    font-size: 4vw;
  }

  .stack-lang {
      font-size: 2.5vw;
      background-color: #16a085;
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
      height: 30vh;
      margin-left: 20vw;
      width: 60vw;
      border: 2px #2c3e50;
      color: #ecf0f1;
      background-color: #16a085;
      padding: 10px;
      margin: 10px;
      box-shadow: 5px 5px 2px #555;
      border-radius: 15px;
    }

    h4 {
       font-size: 7vw;
    }

    .stack-lang {
        font-size: 5vw;
        background-color: #16a085;
    }
}
</style>
