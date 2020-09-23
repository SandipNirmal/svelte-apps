<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  const tabs = [
    {
      name: 'Trending',
      href: 'trending',
    },
    {
      name: 'Movies',
      href: 'movies',
    },
    {
      name: 'TV Shows',
      href: 'tv',
    },
  ];
</script>

<div class="m-4 md:mx-8 mb-0">
  <ul class="flex border-b border-gray-700">
    {#each tabs as { name, href }, i}
      <li
        class="p-2 px-4 border-b-2 border-transparent text-gray-300 font-medium"
        class:border-gray-600={$page.query.tab ? href === $page.query.tab : href === 'trending'}>
        <a href="./movies-app?tab={href}"> {name} </a>
      </li>
    {/each}
  </ul>
</div>
