<script>
  const tabs = [
    {
      name: 'Trending',
      href: './movies-app?tab=trending',
    },
    {
      name: 'Movies',
      href: './movies-app?tab=movies',
    },
    {
      name: 'TV Shows',
      href: './movies-app?tab=tv',
    },
  ];
</script>

<div class="m-4 md:m-8 mb-2">
  <ul class="flex border-b border-gray-300">
    {#each tabs as { name, href }, i}
      <li
        class="p-2 px-4 border-b-2 border-transparent"
        class:border-indigo-600={i === 0}>
        <a {href}> {name} </a>
      </li>
    {/each}
  </ul>
</div>
