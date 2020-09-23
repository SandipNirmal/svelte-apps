<script>
  import { MediaCard, MediaPreview, Tabs } from './_components';

  import { trending } from './data';
  import { mediaStore } from './media';

  let selectedIndex = 17;
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
    } = trending[selectedIndex]);
  }

  // $: console.log($mediaStore)
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
      {adult} />
  </a>

  <Tabs />

  <article
    class="p-8 px-4 pt-4 w-full flex flex-wrap justify-between md:justify-start">
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
</div>
