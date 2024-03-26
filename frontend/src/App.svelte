<!-- src/routes/App.svelte -->

<script>
  import { routes } from '@sveltejs/kit';
</script>

<nav>
  <ul>
    {#each Object.values(routes) as { name, path }}
      {#if name !== 'error'}
        <li><a href="{path}">{name}</a></li>
      {/if}
    {/each}
  </ul>
</nav>

<main>
  <slot></slot>
</main>

<style>
  nav {
    background-color: #333;
    padding: 1rem;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  nav ul li {
    margin-right: 1rem;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
  }

  main {
    padding: 1rem;
  }
</style>
