async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }
  return response.json();
}

export async function fetchLeaderboard() {
  const [players, streams] = await Promise.all([
    loadJSON('./data/_players.json'),
    loadJSON('./data/_streams.json')
  ]);

  if (!Array.isArray(players) || !Array.isArray(streams)) {
    throw new Error('Leaderboard JSON files must contain arrays.');
  }

  return { players, streams };
}
