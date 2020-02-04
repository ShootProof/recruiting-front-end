# Setup

## Initializing

Clone this repo, install the node modules, and you're off to the races!

```
npm install
```

## Get me to the production build of the demo!

```
npm run build && npx serve -s build
```

Builds the React app and starts a local webserver pointing to the built
static assets (in the local `./build` dir). 

## Development

### Storybook

```
npm run storybook
```

Starts and opens a Storybook devserver, allowing isolated component
development and debugging with auto-refresh.

### Demo Devserver

```
npm start
```

Starts and opens a React devserver for the entire "app" that auto-refreshes on code change.

### CSS Changes

Note that this project uses Sass, which is not hooked up to the
hot-refresh cycle of Storybook and the devserver. When editing a `.scss`
file, you will need to run:

```
npm run sass:compile
```

in order to rebuild the CSS. Storybook and the devserver however will
hot-refresh on the CSS change.

## Testing!

> **NOTE:* Tests require having a running
> [Storybook devserver](#storybook) to work!

```
npm run test
```

Runs unit, puppeteer integration, and screenshot tests of the components.