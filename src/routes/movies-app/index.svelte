<script>
  import { Nav, MediaCard, MediaPreview, Tabs } from './_components';

  import { trending } from './data';

  let selectedIndex = 17;
  let {
    title = '',
    name = '',
    vote_average = '',
    backdrop_path = '',
    media_type = '',
    overview: description = '',
    adult = '',
  } = {};

  const onHover = (index) => () => {
    // selectedIndex = index;
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
    } = trending[selectedIndex]);
  }
</script>

<style>
  .wrapper {
    box-sizing: border-box;
    height: 100%;
  }
  .active {
    /* border: 1px solid #000; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); */
  }
</style>

<svelte:head>
  <style>
    html {
      background: #1a202c;
    }
  </style>
</svelte:head>

<div class="movie-app w-screen h-full bg-gray-900">
  <Nav />

  <MediaPreview
    title={title || name}
    ratings={vote_average}
    {media_type}
    image="https://image.tmdb.org/t/p/w780/{backdrop_path}"
    {description}
    {adult} />

  <Tabs />

  <article
    class="p-8 px-4 pt-2 w-full flex flex-wrap justify-between md:justify-start">
    {#each trending as { title, name, vote_average, poster_path, media_type, adult }, i}
      <div
        class="wrapper"
        on:mouseenter={onHover(i)}
        class:active={i === selectedIndex}>
        <MediaCard
          title={title || name}
          ratings={vote_average}
          {media_type}
          image="https://image.tmdb.org/t/p/w500/{poster_path}" />
      </div>
    {/each}
  </article>
</div>
