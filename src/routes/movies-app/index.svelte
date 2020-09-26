<script>
  import { MediaCard, MediaPreview, Tabs } from './_components';
  import { mediaStore } from './media';
  import Spinner from './_components/Spinner.svelte';

  let promise = getTrendingMedia('all');
  let trending = [];

  async function getTrendingMedia(type) {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=2490cc7c5bae166cde5e69c074cf83ea`
    );

    trending = await res.json();

    if (res.ok) {
      trending = trending.results;
      return trending;
    } else {
      throw new Error(trending);
    }
  }

  let selectedIndex = 0;
  let {
    title = '',
    name = '',
    vote_average = '',
    backdrop_path = '',
    media_type = '',
    overview: description = '',
    adult = '',
    id = '',
  } = {};

  const onHover = (index) => () => {
    $mediaStore = trending[index];
  };

  $: {
    ({
      title,
      name,
      vote_average,
      backdrop_path,
      media_type,
      overview: description,
      adult,
      id,
    } = trending.length ? trending[selectedIndex] : {});
  }
</script>

<style>
  .wrapper {
    box-sizing: border-box;
    height: 100%;
  }
</style>

<div>
  <a href="./movies-app/{media_type}s/{id}">
    <MediaPreview
      title={title || name}
      ratings={vote_average}
      {media_type}
      image="https://image.tmdb.org/t/p/w780{backdrop_path}"
      {description}
      {adult}
      loading={!trending.length} />
  </a>

  <Tabs />

  {#await promise}
    <div class="h-40 flex items-center justify-center">
      <Spinner />
    </div>
  {:then trending}
    <article
      class="p-8 px-4 pt-4 w-full flex flex-wrap justify-between
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
