# tauri-app-explore

This project explores tauri toolkit that uses `rust` to build cross-platform desktop apps with `react` (TypeScript) as the frontend rendering library and `vite` as the frontend build tool.

To make the exploration more fun, the project also ported scripts from `https://github.com/jocelin/2048` with mininum updates to work with ES6+ and TypeScript module systems and some refactoring on assets organization, which makes the existing 2048 game cross-platform.

---

[tauri guide](https://tauri.studio/v1/guides/getting-started/prerequisites)

[tauri app generation](https://tauri.studio/v1/guides/getting-started/beginning-tutorial)
  1. start a new project: `yarn create tauri-app`
      - create-vite (vanilla, vue, react, svelte, preact, lit)
      - react-ts

  1. navigate to the app root
  1. run `yarn tauri info` to check Environment, Packages, App and App directory structure

Run app in dev mode:
  - web app: `yarn dev`
  - desktop app: `yarn tauri dev`

