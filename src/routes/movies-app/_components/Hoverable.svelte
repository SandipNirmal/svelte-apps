<script>
  let hovering;

  function enter() {
    hovering = true;
    console.log('Hovering', hovering);
  }

  function leave() {
    hovering = false;
    console.log('Hovering', hovering);
  }
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot {hovering} />
</div>
