const fs = require('fs');
const path = require('path');

module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'ci', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'types', release: 'patch' },
          { type: 'typings', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
          transform: (commit) => {
            const newCommit = { ...commit };
            newCommit.notes.forEach(note => {
              note.title = 'BREAKING CHANGES';
            });
            switch (newCommit.type) {
              case 'feat':
                newCommit.type = 'Features';
                break;
              case 'fix':
                newCommit.type = 'Bug Fixes';
                break;
              case 'docs':
                newCommit.type = 'Documentation';
                break;
              case 'style':
                newCommit.type = 'Styles';
                break;
              case 'refactor':
                newCommit.type = 'Refactoring';
                break;
              case 'perf':
                newCommit.type = 'Performance Improvements';
                break;
              case 'test':
                newCommit.type = 'Tests';
                break;
              case 'build':
                newCommit.type = 'Build System';
                break;
              case 'ci':
                newCommit.type = 'Continuous Integration';
                break;
              case 'chore':
                newCommit.type = 'Chores';
                break;
              default:
                return commit;
            }
            if (newCommit.scope === '*') {
              newCommit.scope = '';
            }
            if (typeof newCommit.hash === 'string') {
              newCommit.hash = newCommit.hash.substring(0, 7);
            }
            return newCommit;
          },
        },
        writerOpts: {
          mainTemplate: fs.readFileSync(path.resolve(__dirname, 'changelog-template.hbs'), 'utf-8'),
          commitPartial: fs.readFileSync(path.resolve(__dirname, 'commit-template.hbs'), 'utf-8'),
          headerPartial: '',
          footerPartial: '',
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
