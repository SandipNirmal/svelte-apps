<script>
  // import { stores } from '@sapper/app';
  // const { page } = stores();
  import { blur } from 'svelte/transition';

  import { MediaCard, MediaPreview, Tabs } from './_components';
  import { mediaStore } from './media';
  import Spinner from './_components/Spinner.svelte';
  import { API_KEY } from './config';

  let promise = getTrendingMedia('all');
  let trending = [];
  let media = {};

  async function getTrendingMedia(type) {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${API_KEY}`
    );

    trending = await res.json();

    if (res.ok) {
      trending = trending.results;
      media = trending.length ? trending[selectedIndex] : {};
      return trending;
    } else {
      throw new Error(trending);
    }
  }

  let selectedIndex = 0;

  const onHover = (index) => () => {
    $mediaStore = trending[index];
  };

  $: {
    // getTrendingMedia($page.query.tab || 'all');
  }
</script>

<style>
  .wrapper {
    box-sizing: border-box;
    height: 100%;
  }
</style>

<div in:blur={{ duration: 300 }}>
  <MediaPreview
    {media}
    loading={!trending.length}
    on:mouseenter={onHover(selectedIndex)} />

  <div class="max-w-screen-xl my-0 mx-auto">
    <Tabs />

    {#await promise}
      <div class="h-40 flex items-center justify-center">
        <Spinner />
      </div>
    {:then trending}
      <article
        class="p-8 px-4 pt-4 w-full flex flex-wrap justify-center
          md:justify-start">
        {#each trending as { title, name, vote_average, poster_path, media_type, adult, id }, i}
          <a href="./movies-app/{media_type}s/{id}">
            <div
              class="wrapper"
              on:mouseenter={onHover(i)}
              class:active={i === selectedIndex}>
              <MediaCard
                title={title || name}
                ratings={vote_average}
                {media_type}
                image="https://image.tmdb.org/t/p/w500{poster_path}" />
            </div>
          </a>
        {/each}
      </article>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>
