<style>
  .spinner {
    border: 6px solid #fff;
    border-left-color: transparent;
    animation: spin linear 0.75s infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div class="spinner w-12 h-12 border-t-2 border-white rounded-full" />
