import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const checkedPaths = [
	'src',
	'scripts',
	'README.md',
	'SEO_PLAN_PREPARADOR_AGE_SS.md',
	'SEO_URLS.md',
	'package.json',
	'astro.config.mjs',
];
const checkedExtensions = new Set(['.astro', '.css', '.js', '.mjs', '.md', '.ts', '.json', '.html', '.txt']);
const mojibakeCodes = new Set([0x00c3, 0x00c2, 0x00e2]);
const findings = [];

function scan(path) {
	if (!existsSync(path)) return;

	const stats = statSync(path);

	if (stats.isFile()) {
		checkFile(path);
		return;
	}

	for (const name of readdirSync(path)) {
		const current = join(path, name);
		const currentStats = statSync(current);

		if (currentStats.isDirectory()) {
			scan(current);
			continue;
		}

		checkFile(current);
	}
}

function checkFile(path) {
	if (!checkedExtensions.has(extname(path))) return;

	const lines = readFileSync(path, 'utf8').split(/\r?\n/);
	lines.forEach((line, index) => {
		if ([...line].some((character) => mojibakeCodes.has(character.codePointAt(0)))) {
			findings.push(`${path}:${index + 1}: ${line}`);
		}
	});
}

checkedPaths.forEach(scan);

if (findings.length > 0) {
	console.error('Se han detectado caracteres probablemente mal codificados:\n');
	console.error(findings.join('\n'));
	process.exit(1);
}

console.log('Codificacion revisada: sin mojibake.');
