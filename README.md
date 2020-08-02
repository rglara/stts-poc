# Proof of concept for Star Trek Timelines Spreadsheet

A re-imagining of the https://github.com/paulbilnoski/StarTrekTimelinesSpreadsheet/ project.

Utilizes [NeutralinoJS](https://neutralino.js.org/) as an alternative to Electron.

Uses https://github.com/rglara/neutralinojs-react-typescript as a basis.

## Get started

### Clone the repo

```bash
$ git clone ...
$ cd stts-poc
```

### Install dependencies

```bash
$ npm i
```
This will also download the latest server components from https://github.com/neutralinojs/neutralinojs/releases.

### Build the React portion of the project.

```bash
$ npm run build
```

### Package everything into a distribution-ready folder (`/dist`)

```bash
$ npm run package-neu
```
This will also rebuild the React project automatically.

### Run appropriate platform NeutralinoJs application

```bash
$ npm run ui-windows
$ npm run ui-mac
$ npm run ui-linux
```
This will also repackage the application automatically.
