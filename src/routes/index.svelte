<script>
  const BackgroundColors = ['red',  'green', 'orange', 'teal',  'blue', 'yellow','indigo']

  const apps = [
    {
      name: 'Notes App (Markdown)',
      icon: 'N',
      href: '/notes',
    },
    {
      name: 'Text Editor',
      icon: 'T',
      href: '/text-editor',
    },
  ];
</script>

<style>
  .icon {
    text-shadow: 0 6px 4px #444;
    transition: all 0.3s linear;
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
    {#each apps as { name, icon, href }, i}
      <a {href} alt={name} class="flex flex-col items-center">
        <div
          class="icon w-16 h-16 rounded-full {`bg-${BackgroundColors[i]}-500`} text-white font-bold
            flex items-center justify-center text-3xl">
          {icon}
        </div>
        <span class="text-gray-700 text-sm mt-1">{name}</span>
      </a>
    {/each}
  </div>
</article>
