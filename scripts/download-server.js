const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const Got = require('got');
const AdmZip = require('adm-zip');

const MANIFEST_URL = 'https://api.github.com/repos/neutralinojs/neutralinojs/releases/latest';
const OUTPUT_DIRECTORY = 'server';
const CLIENT_LIB_SRC = path.join(OUTPUT_DIRECTORY, 'app', 'assets', 'neutralino.js');
const CLIENT_LIB_DEST_DIR = path.join('public', 'assets');
const CLIENT_LIB_DEST = path.join(CLIENT_LIB_DEST_DIR, 'neutralino.js');

const extractZipUrl = async (url) => {
	console.log('Downloading zip file...');
	const zipBuffer = await Got.get(url).buffer();
	console.log('Removing previous output...');
	fs.rmdirSync(OUTPUT_DIRECTORY, { recursive: true });
	console.log('Opening zip file...');
	const zip = new AdmZip(zipBuffer);
	console.log('Extracting zip file...');
	zip.getEntries().forEach((entry) => {
		if (!entry.isDirectory) {
			const outputFile = path.join(OUTPUT_DIRECTORY, entry.entryName);
			console.log(` - ${outputFile}`);
			zip.extractEntryTo(entry.entryName, OUTPUT_DIRECTORY);

			// fix file permissions
			const filePermissions = (entry.header.attr >>> 16) & 511;
			const permissionString = `${(filePermissions >>> 6) & 7}${(filePermissions >>> 3) & 7}${filePermissions & 7}`;
			shell.chmod(permissionString, outputFile);
		}
	});
};

const downloadServer = async () => {
	try {
		console.log('Downloading NeutralinoJS manifest...');
		const manifest = await Got.get(MANIFEST_URL, { responseType: 'json' });
		console.log(`Finding latest (${manifest.body.tag_name})...`);
		for(let i = 0; i < manifest.body.assets.length; i += 1) {
			if (manifest.body.assets[i].content_type === 'application/zip') {
				await extractZipUrl(manifest.body.assets[i].browser_download_url);
				break;
			}
		}
		console.log('Copy client library to public directory...');
		shell.mkdir('-p', CLIENT_LIB_DEST_DIR);
		shell.cp(CLIENT_LIB_SRC, CLIENT_LIB_DEST);
		console.log('DONE!');
	}
	catch(err) {
		console.log('Failed to download server.');
		console.log(err);
	}
};

downloadServer();
