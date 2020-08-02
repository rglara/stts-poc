const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const OUTPUT_DIRECTORY = 'dist';
const BUILD_DIRECTORY = 'build';
const SERVER_DIRECTORY = 'server';
const APP_DIRECTORY = path.join(OUTPUT_DIRECTORY, 'app');
const ASSETS_DIRECTORY = path.join(APP_DIRECTORY, 'assets');

const packageRelease = () => {
	console.log('--- Generating Distributable Package ---');
	console.log('Removing previous output...');
	fs.rmdirSync(OUTPUT_DIRECTORY, { recursive: true });
	console.log('Creating output directory...');
	fs.mkdirSync(APP_DIRECTORY, { recursive: true });
	fs.mkdirSync(ASSETS_DIRECTORY, { recursive: true });

	// copy cross-platform launchers from server
	console.log('Copying cross-platform launchers...');
	shell.cp(path.join(SERVER_DIRECTORY, 'neutralino-*'), OUTPUT_DIRECTORY);

	// copy build output
	console.log('Copying build output...');
	shell.cp(path.join(BUILD_DIRECTORY, 'logo.png'), OUTPUT_DIRECTORY);
	shell.cp(path.join(BUILD_DIRECTORY, 'index.html'), APP_DIRECTORY);
	shell.cp(path.join(BUILD_DIRECTORY, 'settings.json'), APP_DIRECTORY);
	shell.cp('-r', path.join(BUILD_DIRECTORY, 'assets', '*'), ASSETS_DIRECTORY);
	shell.cp('-r', path.join(BUILD_DIRECTORY, 'static', '*'), ASSETS_DIRECTORY);

	// fix paths in index.html (/static/ to /assets/)
	shell.sed('-i', /\/static\//g, '/assets/', path.join(APP_DIRECTORY, 'index.html'));
};

packageRelease();
