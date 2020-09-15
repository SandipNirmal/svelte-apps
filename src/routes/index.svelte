<script>
  const apps = [
    {
      name: 'Notes App',
      icon: 'N',
      href: '/notes',
    },
  ];
</script>

<style>
  .icon {
    text-shadow: 0 6px 4px #444;
  }

  .icon:hover {
    box-shadow: 0 4px 8px #888;
  }
</style>

<svelte:head>
  <title>Svelte Applications built With Sapper</title>
</svelte:head>
<article class="max-w-screen-xl my-8 mx-auto">
  <h1 class="text-center my-0 mx-auto font-bold text-2xl">
    Applications Built with Svelte
  </h1>

  <div class="flex flex-wrap justify-around mt-12">
    {#each apps as { name, icon, href }}
      <a {href} alt={name} class="flex flex-col items-center">
        <div
          class="icon w-12 h-12 rounded-full bg-orange-600 text-white font-bold
            flex items-center justify-center text-2xl">
          {icon}
        </div>
        <span class="text-gray-700 text-sm mt-1">{name}</span>
      </a>
    {/each}
  </div>
</article>
