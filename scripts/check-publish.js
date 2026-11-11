'use strict';

/**
 * Run by npm before publishing (the prepublishOnly script): stops the publish
 * unless the package is published from exactly what its remote repository
 * has, so that nothing is published that was not pushed (or from a checkout
 * that missed what was pushed from elsewhere).
 *
 * - No uncommitted change and no untracked file in the repository
 * - After fetching, HEAD is the commit of the branch's upstream (nothing to
 *   push, nothing to pull)
 * - Every file the package would contain is tracked by git (an ignored file
 *   would be published without being in the repository)
 *
 * Usage (from the package's root, which is the repository's root):
 *   node scripts/check-publish.js
 */

var childProcess = require('child_process');

function git(args) {
	return childProcess.execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

/** The paths npm would put into the package, as npm pack lists them */
function packedFiles() {
	var args = ['pack', '--dry-run', '--json', '--ignore-scripts'];
	// Run by npm, the npm that runs it is known; run directly, the one on the PATH
	var out = process.env.npm_execpath
		? childProcess.execFileSync(process.execPath, [process.env.npm_execpath].concat(args), { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
		: childProcess.execSync('npm ' + args.join(' '), { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
	return JSON.parse(out)[0].files.map(function (file) { return file.path; });
}

function check() {
	var problems = [];

	var status = git(['status', '--porcelain']).trim();
	if (status) {
		problems.push('uncommitted changes or untracked files:\n' + status.split('\n').map(function (line) { return '  ' + line; }).join('\n'));
	}

	var upstream = null;
	try {
		upstream = git(['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}']).trim();
	} catch (e) {
		problems.push('the branch has no upstream (push it first)');
	}
	if (upstream !== null) {
		git(['fetch', '--quiet']);
		var head = git(['rev-parse', 'HEAD']).trim();
		var remote = git(['rev-parse', '@{u}']).trim();
		if (head !== remote) {
			var notPushed = git(['rev-list', '--count', '@{u}..HEAD']).trim();
			var notPulled = git(['rev-list', '--count', 'HEAD..@{u}']).trim();
			problems.push('HEAD is not ' + upstream + ': ' + notPushed + ' commit(s) not pushed, ' + notPulled + ' commit(s) not pulled');
		}
	}

	// Both lists are paths from the package's root, where npm runs this
	var tracked = {};
	git(['ls-files', '-z']).split('\0').forEach(function (file) { tracked[file] = true; });
	var untracked = packedFiles().filter(function (file) { return !tracked[file]; });
	if (untracked.length) {
		problems.push('files the package would contain that git does not track:\n' + untracked.map(function (file) { return '  ' + file; }).join('\n'));
	}

	return problems;
}

var problems = check();
if (problems.length) {
	console.error('Not published: the package has to be published from what its remote repository has.');
	problems.forEach(function (problem) { console.error('- ' + problem); });
	process.exitCode = 1;
} else {
	console.log('check-publish: the package is what the remote repository has');
}
