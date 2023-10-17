# Stackbit Svelte Kit Example

This is an example project using Stackbit and Svelte Kit.

## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Stackbit Git Backed Editing

Stackbit is a framework-agnostic visual content editor. The recommended method for local development is to install the CLI tool, which allows you to run Stackbit on any project as long as it has a 'stackbit.config.js' file in the project's root directory. If you haven't already, install the CLI tool globally:
```bash
npm install -g @stackbit/cli@latest
```
To edit the site using Stackbit, go to the root directory of this project and run:
```bash
stackbit dev
```
