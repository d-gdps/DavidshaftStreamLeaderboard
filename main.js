import { fetchLeaderboard } from './content.js';
import SiteHeader from './Header.js';

const { createApp } = Vue;

createApp({
  components: { SiteHeader },
  data() {
    return {
      dark: localStorage.getItem('streamLeaderboardTheme') === 'dark',
      players: [],
      streams: [],
      selectedPlayer: null,
      loading: true,
      error: ''
    };
  },
  computed: {
    rankedPlayers() {
      return [...this.players].sort((a, b) => Number(b.xp) - Number(a.xp));
    },
    selectedRank() {
      if (!this.selectedPlayer) return 0;
      return this.rankedPlayers.findIndex(p => p.name === this.selectedPlayer.name) + 1;
    },
    playerStreams() {
      if (!this.selectedPlayer) return [];
      return this.streams
        .filter(stream => stream.player === this.selectedPlayer.name)
        .sort((a, b) => new Date(b.sortDate || b.date) - new Date(a.sortDate || a.date));
    }
  },
  methods: {
    toggleTheme() {
      this.dark = !this.dark;
      document.documentElement.dataset.theme = this.dark ? 'dark' : 'light';
      localStorage.setItem('streamLeaderboardTheme', this.dark ? 'dark' : 'light');
    },
    selectPlayer(player) {
      this.selectedPlayer = player;
    },
    formatXP(value) {
      return Number(value || 0).toLocaleString('en-US');
    }
  },
  async mounted() {
    document.documentElement.dataset.theme = this.dark ? 'dark' : 'light';
    try {
      const data = await fetchLeaderboard();
      this.players = data.players;
      this.streams = data.streams;
      this.selectedPlayer = this.rankedPlayers[0] || null;
    } catch (error) {
      this.error = 'Could not load leaderboard data. Check that _players.json and _streams.json are valid JSON.';
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}).mount('#app');
