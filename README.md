# Davidshaft Stream Leaderboard

A small Vue 3 leaderboard designed for GitHub Pages. It uses static JSON files, so no server or build process is required.

## Publish with GitHub Pages

1. Create a public GitHub repository named `DavidshaftStreamLeaderboard` (or another name).
2. Upload the contents of this folder to the repository root. `index.html` should be at the root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## Updating players and XP

Edit `data/_players.json`. Each player needs a unique `name` and an `xp` number:

```json
[
  { "name": "PlayerOne", "xp": 215 },
  { "name": "PlayerTwo", "xp": 150 }
]
```

The site sorts players automatically from highest XP to lowest.

## Adding stream history

Edit `data/_streams.json`. The `player` value must exactly match a player's `name` in `_players.json`:

```json
[
  {
    "id": 1,
    "player": "PlayerOne",
    "name": "Stream",
    "date": "11/24/26",
    "sortDate": "2026-11-24",
    "xp": 215
  }
]
```

`sortDate` should use `YYYY-MM-DD` so entries sort chronologically. The date shown on the website comes from `date`.

## Customize the header links

Open `js/Components/Header.js` and replace the Discord and YouTube URLs with your own invite and channel links.

## Notes

- Vue 3 is loaded from the Vue CDN.
- The website remembers the selected light/dark theme in the visitor's browser.
- Changes to JSON files appear after the page is refreshed (or the browser cache updates).
