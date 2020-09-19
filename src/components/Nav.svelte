<style>
  nav {
    bottom: 12px;
    right: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }

  nav:hover {
    box-shadow: 0 8px 16px rgba(56, 161, 105, 0.9), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
</style>

<nav
  class="rounded-full bg-green-600 p-1 text-white fixed flex items-center
    justify-center w-12 h-12">
  <ul class="p-2">
    <li>
      <a href="." alt='Home'>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="home-lg-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-6 h-6"><path
            fill="#fff"
            d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V368a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm282.69 121.28l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z" />
        </svg>
      </a>
    </li>
    <!-- <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li> -->
  </ul>
</nav>
