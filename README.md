

# Pragmatically Applying Functional React.js

The workshop uses an auto-build development environment to transpile ES6/7 code to ES5 with Babel and bundle with Webpack. Node.js is used to run the environment.

## Install

 1. Install Node.js (with npm)
 2. Install or confirm git is installed
 3. Install dependencies using npm


### 1. Install Node.js (with npm)

Install the latest LTS 4+ or Current 6+ version

 - https://nodejs.org/ - Node.js home page
 - https://nodejs.org/en/download/ - Other Node.js downloads

Confirming the install and versions

```bash
node -v
npm -v
```

### 2. Confirming git is installed

Git is used to make it easy to pull down the latest changes to the repo for the workshop.

Ensuring that git is installed

```bash
git --version
```

If git isn't installed then visit https://git-scm.com/ to download and install.

### 3. Installing the dependencies using npm

```bash
npm install
```

The install can take several minutes dependin on your machine.

Note on some platforms like windows you might get some errors when it tries to install optional packages like fsevents. Normally these are ok and the build should continue. If the build ends up failing you might try

```bash
npm cache clean
```

Delete your node_modules directory and try the `npm install` again.



## Run the auto-build dev environment

To start the auto-build dev enviornment and display the index page in your browser.

```bash
npm start
```

(use control-c to interrupt and halt)
