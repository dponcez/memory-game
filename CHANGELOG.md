# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-12-31

### Added
- Centralized icons into `states.icons` (`variables/globals.js`).
- `scripts/assert-icons.mjs`: Node script that asserts `cardIcons()` returns a non-empty array.
- `.github/workflows/ci.yml`: GitHub Actions workflow that runs the icons assertion on push/PR.

### Changed
- `modules/createTable.js`: Now requires `states.icons` by default and throws an explicit error if `states.icons` is not initialized as an array.
- `modules/gameController.js`: Uses `createTable()` without passing icons manually (now reads from `states`).

### Fixed
- Fixed "icons no es iterable" error when pressing **reset game** by ensuring `createTable` always receives a valid array.

### Removed
- Deleted empty file `modules/resetGame.js`.
- Cleaned redundant imports in `modules/createTable.js`.

---

> Tip: When releasing, move the `Unreleased` changes under a new heading with the release date (e.g. `## [1.0.0] - 2026-01-01`).
