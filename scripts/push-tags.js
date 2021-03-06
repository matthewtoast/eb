const cp = require('child_process');
const path = require('path');
const cwd = path.join(__dirname, '..');
cp.execSync('git fetch --tags --prune --force', {cwd, stdio: 'inherit'});
const out = cp.execSync('git tag --sort=v:refname', {cwd}).toString();
const lines = out.trim().split('\n');
const lastTag = lines[lines.length - 1];
const tagPieces = lastTag.split('.');
const lastNum = parseInt(tagPieces[tagPieces.length - 1], 10);
tagPieces.pop();
tagPieces.push(lastNum + 1);
const nextTag = tagPieces.join('.');
cp.execSync(`git tag -a ${nextTag} -m ${nextTag}`, {cwd}).toString();
cp.execSync('git push origin --tags --no-verify', {stdio: 'inherit', cwd});
