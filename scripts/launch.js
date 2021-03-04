const path = require('path');
const cp = require('child_process');
const pkg = require('../package.json');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist', 'mac');
const APP = `${pkg.name}.app`;

cp.execSync(`open ${path.join(DIST, APP)}`);
