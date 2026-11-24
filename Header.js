export default {
  props: { dark: { type: Boolean, default: false } },
  emits: ['toggle-theme'],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="./" aria-label="Davidshaft Stream Leaderboard home">
          <img src="./logo.svg" alt="">
          <span>DAVIDSHAFT STREAM LEADERBOARD</span>
        </a>
        <nav class="header-actions" aria-label="Header links">
          <button class="icon-button" type="button" @click="$emit('toggle-theme')"
            :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
            :title="dark ? 'Light mode' : 'Dark mode'">
            <span aria-hidden="true">{{ dark ? '☀' : '☾' }}</span>
          </button>
          <a class="icon-button" href="https://discord.com/" target="_blank"
            rel="noopener noreferrer" aria-label="Discord" title="Discord">🎮</a>
          <!-- Replace with your own stream/channel URL. -->
          <a class="channel-button" href="https://www.youtube.com/" target="_blank"
            rel="noopener noreferrer">View Channel</a>
        </nav>
      </div>
    </header>
  `
};
