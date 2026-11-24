export default {
  props: { dark: { type: Boolean, default: false } },
  emits: ['toggle-theme'],
  template: `
    <header class="site-header">
      <div class="header-inner">

        <a class="brand" href="./" aria-label="Davidshaft Stream Leaderboard home">
          <img src="./logo.png" alt="Davidshaft Logo">
          <span>DAVIDSHAFT STREAM LEADERBOARD</span>
        </a>

        <nav class="header-actions" aria-label="Header links">

          <!-- Light/Dark Mode Toggle -->
          <button class="icon-button" type="button" @click="$emit('toggle-theme')"
            :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
            :title="dark ? 'Light mode' : 'Dark mode'">
            <img
              :src="dark ? './light.svg' : './dark.svg'"
              alt=""
              class="theme-icon"
            >
          </button>

          <!-- Discord -->
          <a class="icon-button" href="https://discord.com/invite/KXMhbfV" target="_blank"
            rel="noopener noreferrer" aria-label="Discord" title="Discord">
            <img src="./discord.svg" alt="Discord" class="discord-logo">
          </a>

          <!-- YouTube Channel -->
          <a class="channel-button" href="https://www.youtube.com/channel/UCr2sml5eSCwnTLRXZaEDXvA" target="_blank"
            rel="noopener noreferrer">
            View Channel
          </a>

        </nav>
      </div>
    </header>
  `
};
