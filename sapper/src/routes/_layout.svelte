<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  #app {
    height: 100%;
    background-color: black;
  }

  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div id="app">
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
