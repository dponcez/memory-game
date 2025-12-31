# Memory Game

A small memory game implemented with JavaScript, HTML and CSS.

## ✅ Status & Key Features

- Game board generated dynamically with icons (pairs of cards).
- Card flip mechanism and pair detection.
- Timer, score and movement counters.
- Victory modal showing `score`, `movements` and `time` when all pairs are matched.
- **Reset game** button that rebuilds the board and resets timer and score.
- Modular codebase with separate logic under `modules/` and utilities in `utils/`.

## 🔧 Recent changes & improvements

Several improvements were made to make the app more robust and maintainable:

- Icons centralization
  - `states.icons` (in `variables/globals.js`) now holds the icons used by the app, avoiding multiple calls to `cardIcons()` and providing a single source of truth.

- Safety in table generation
  - `modules/createTable.js` now uses `states.icons` by default and includes an explicit assertion:
    ```js
    if (!Array.isArray(icons)) throw new Error('createTable: states.icons is not initialized as an array');
    ```
    This catches initialization problems early.

- Reset bug fix
  - Fixed the "icons is not iterable" error when pressing **reset game** by ensuring `createTable` always receives a valid icons array.

- Cleanup & maintenance
  - Removed the empty file `modules/resetGame.js`.
  - Removed redundant imports in `modules/createTable.js`.

- CI check
  - Added `scripts/assert-icons.mjs`: a script that verifies `cardIcons()` returns a non-empty array.
  - Added GitHub Actions workflow `.github/workflows/ci.yml` to run the check on each `push`/`pull_request`.

## 📁 Relevant files

- `modules/createTable.js` — creates and renders game cards; now requires `states.icons` and throws an explicit error if missing.
- `modules/gameController.js` — manages game logic, reset and timer.
- `variables/globals.js` — now exports `states.icons` initialized with `cardIcons()`.
- `modules/cardIcons.js` — returns the icons array.
- `scripts/assert-icons.mjs` — CI assertion script.
- `.github/workflows/ci.yml` — CI workflow.

## ▶️ How to test locally

- Open `index.html` in a browser and play.
- Run the icons assertion script:
  ```bash
  node scripts/assert-icons.mjs
  ```
- Push changes to trigger the GitHub Actions check:
  ```bash
  git push
  ```

## 💡 Final notes

- Centralizing `icons` in `states` improves maintainability and reduces the chance of bugs from duplicated calls.
- If you want, I can add tests using JSDOM or a small test runner to verify `states` and other modules initialize correctly in CI.

---

## 🤝 Contributing

Thanks for your interest in contributing. To make reviews faster and increases the chance of merging, please follow these guidelines:

### 1) Workflow
- Fork the repository and create a descriptive branch from `main`, for example:
  - `feat/responsive-board`
  - `fix/reset-icons-error`
- Keep your branch up to date with `main` before opening a PR (rebase or merge as you prefer).

### 2) Commit messages
- Use Conventional Commits:
  - `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`.
- Examples:
  - `fix: handle 'icons is not iterable' in reset`
  - `feat: centralize icons in states`

### 3) Pull Requests
- Open the PR against `main` with a clear description of the change and rationale.
- Include reproduction or verification steps (commands, screenshots if applicable).
- Reference an issue where applicable (e.g. `Closes #12`).

### 4) Minimal review checklist
Before requesting review, make sure:
- The change is manually tested (the app loads and the changed behavior works).
- `node scripts/assert-icons.mjs` passes on your branch (mandatory for changes touching icons or `cardIcons`).
- If you add automated tests, run them locally.
- Update `CHANGELOG.md` under `Unreleased` for notable changes.

### 5) Run & test locally
- Install dependencies (if any): `npm install`.
- Open `index.html` in the browser for manual testing.
- Run the icons assertion: `node scripts/assert-icons.mjs`.

### 6) CI & quality
- The project uses GitHub Actions to run a basic check (`assert-icons`). Ensure your PR passes that check.
- If you want, I can add linters and test runners (I can implement them on request).

### 7) Code style
- Use modern JavaScript (ES modules), small pure functions and single-responsibility files.
- Prefer descriptive names and add comments where intent is not obvious.

### 8) Communication
- For major or design changes, open an issue to discuss first.

Thanks for contributing — all contributions are welcome and will be reviewed carefully.

## 📝 Changelog

See `CHANGELOG.md` for recent changes and project history.