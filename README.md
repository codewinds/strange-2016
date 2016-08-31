

# Pragmatically Applying Functional React.js

The workshop uses an auto-build development environment to transpile ES6/7 code to ES5 with Babel and bundle with Webpack. Node.js is used to run the environment.

**Note: Please install this repo prior to the workshop** so we can ensure that things install and build properly. As we approach the workshop, you'll be able to do a `git pull origin` to efficiently get the updated workshop code wihout having to redownload these dependencies. If you have any problems, see the end of this readme for contacting me.

## Install

 1. Install Node.js (with npm)
 2. Install or confirm git is installed
 3. Install dependencies using npm


### 1. Install Node.js (with npm)

Install the latest LTS 4+ or Current 6+ version. Also check that your npm version is 2.x.x, 3.0.0-3.8.7, or 3.10.4+.

 - https://nodejs.org/ - Node.js home page
 - https://nodejs.org/en/download/ - Other Node.js downloads

Confirming the install and versions

```bash
node -v
npm -v
```

Node.js: 4.x.x (LTS) or 6.x.x (Current)
NPM: 2.x.x, 3.0.0-3.8.7, or 3.10.4+

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

The install can take several minutes depending on your machine.

Note on some platforms like windows you might get some errors when it tries to install optional packages like fsevents. Normally these are ok and the build should continue. If the build ends up failing you might try

```bash
npm cache clean
```

Delete your node_modules directory and try the `npm install` again.

Also double check your version of Node and NPM which I mentioned in step 1.

If you still have problems, please see the section below about contacting me for help.

## Run the auto-build dev environment

To start the auto-build dev enviornment and display the index page in your browser.

```bash
npm start
```

(use control-c to interrupt and halt)

Currently this just has some placeholder text but as we get closer to the workshop you will be able to `git pull origin` to get the workshop files. In doing this you won't have to redownload the bulk of the files, it should just be a light update of some source.

## Updating your code as we approach the workshop

I'll be putting out updates with the workshop code as we get closer to the date. To update you simply use `git pull origin`. That will pull down only things that are different which should be minimal. `npm install` will install anything that has changed and you'll be ready to roll.

```bash
git pull origin
npm install
```

## If you have problems getting things installed or running

Please let me know if you have any problems getting things installed and running. I'd like to handle as many of these things in advance so we can focus our workshop time on the material and exercises.

Click the link below to send me an email with the subject "Strange Loop 2016 installation issue" and include the following details:

[Email me jeff@codewinds.com](mailto:jeff@codewinds.com?subject=Strange%20Loop%202016%20installation%20issue)

 1. output from running: node -v
 2. output from running: npm -v
 3. attach any errors or anything you think may be relevant
