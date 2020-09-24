<script>
  export let name = 'Robert Downey Jr';
  export let character = 'Iron Man';
  export let profileImage = '';
</script>

<style>
  .profile {
    transition: all 0.3s;
  }

  .profile:hover {
    transform: scale(1.1);
  }
</style>

<div class="flex flex-col items-center text-xs p-2 w-32">
  <div
    class="profile w-12 h-12 md:w-16 md:h-16 bg-gray-600 rounded-full mb-1 bg-cover
      border-2 border-gray-200 cursor-pointer"
    style="background-image: url({profileImage})" />
  <h6 class="mb-1">{name}</h6>
  <h6 class="text-gray-400">{character}</h6>
</div>
