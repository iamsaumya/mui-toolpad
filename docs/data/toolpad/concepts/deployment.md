# Deployment

<p class="description">Deploying a Toolpad app is like deploying any other React/Node application.</p>

## Pre-requisites

- This guide assumes that you have copied your project folder to the server, and all subsequent commands are run inside it.

- Make sure to add the following scripts to your `package.json`

```json
 "scripts": {
   "dev": "toolpad dev"
   "build": "toolpad build"
   "start": "toolpad start"
 }
```

## Install step

Install required depdencies via:

<codeblock storageKey="package-manager">

```bash npm
npm install
```

```bash yarn
yarn
```

</codeblock>

## Build step

This command will create an optimized production build for the Toolpad app and will output the generated files:

<codeblock storageKey="package-manager">

```bash npm
npm run build
```

```bash yarn
yarn build
```

</codeblock>

## Start step

Once the build has been made, you can deploy it to any service of your choice!

To serve the app once built, run:

<codeblock storageKey="package-manager">

```bash npm
npm run start
```

```bash yarn
yarn start
```

</codeblock>

If you want to listen on a specific port you can change the start script to:

```json
  "start": "toolpad start -p 1234"
```

## Custom base path

Toolpad applications can run under a custom base path. Use the `--base` CLI parameter to set a base under which the Toolpad application is hosted.

```bash
toolpad dev --base /foo
```

Now the Toolpad application is accessible under `http://localhost:3000/foo`. The `--base` parameter must be supplied to the `build` command. A build always has one specific base path:

```bash
toolpad build --base /foo
toolpad start --base /foo
```

## Detailed guides

Detailed, step-by-step instructions are available for the following services:

- [Render](/toolpad/how-to-guides/render-deploy/)
