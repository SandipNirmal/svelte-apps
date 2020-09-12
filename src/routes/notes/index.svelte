<script>
  import Sidebar from './_sidebar.svelte';
  import Editor from './_editor.svelte';

  let sidebarOpen = true;

  const toggleSidebar = () => (sidebarOpen = !sidebarOpen);
</script>

<div class="flex h-screen">
  {#if sidebarOpen}
    <Sidebar {toggleSidebar} />
  {/if}

  <div class="editor flex-1">
    <Editor {toggleSidebar} />
  </div>
</div>
