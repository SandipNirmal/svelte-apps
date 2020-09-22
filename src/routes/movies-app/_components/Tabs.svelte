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

<div class="m-4 md:mx-8 mb-0">
  <ul class="flex border-b border-gray-700">
    {#each tabs as { name, href }, i}
      <li
        class="p-2 px-4 border-b-2 border-transparent text-gray-300 font-medium"
        class:border-gray-600={i === 0}>
        <a {href}> {name} </a>
      </li>
    {/each}
  </ul>
</div>
