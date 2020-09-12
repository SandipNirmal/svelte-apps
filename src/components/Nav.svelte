<script>
  export let segment;
</script>

<style>
  nav {
    position: fixed;
    bottom: 16px;
		right: 16px;
		width: 48px;
		height: 48px;
		text-align: center;
  }
</style>

<nav class="rounded-full shadow-sm bg-gray-600 p-2 text-white">
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">H</a>
    </li>
    <!-- <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li> -->
  </ul>
</nav>
