<script>
  import { createEventDispatcher } from 'svelte';
  import { stores, goto } from '@sapper/app';

  const { page } = stores();
  const dispatch = createEventDispatcher();

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

  let selectedTab = $page.query.tab || 'trending';

  const tabSelection = (i = 0) => () => {
    selectedTab = tabs[i].href;
    dispatch('tab-selection', { selectedTab });
    goto(`./movies-app?tab=${selectedTab}`);
  };
</script>

<div class="m-4 md:mx-8 mb-0">
  <ul class="flex border-b border-gray-700">
    {#each tabs as { name, href }, i}
      <li
        class="p-2 px-4 border-b-2 border-transparent text-gray-300 font-medium
          cursor-pointer {href === selectedTab ? 'border-white' : ''}"
        on:click={tabSelection(i)}>
        {name}
      </li>
    {/each}
  </ul>
</div>
