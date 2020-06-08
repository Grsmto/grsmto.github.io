<script>
  export let storySlug;
  export let imgSrc;
</script>

<style>
  .container {
    width: 63px;
    height: 63px;
  }

  a {
    display: block;
    overflow: hidden;
    text-decoration: none;
    border: 1px solid gray;
    border-radius: 100%;
  }

  h3 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-size: 10px;
  }
</style>

<div class="container">
  <a href="projects/{storySlug}">
    <img src={imgSrc} alt="project" />
  </a>
  <h3>
    <slot />
  </h3>
</div>
