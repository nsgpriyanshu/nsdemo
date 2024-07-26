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
          { type: 'ci', release: 'patch' },
          { type: 'build', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts: {
          transform: (commit, context) => {
            const issues = [];
            const newCommit = { ...commit }; // Create a new commit object
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
                newCommit.type = 'Code Refactoring';
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
              case 'types':
                newCommit.type = 'Types';
                break;
              case 'typings':
                newCommit.type = 'Typings';
                break;
              case 'revert':
                newCommit.type = 'Reverts';
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
          mainTemplate: fs.readFileSync(path.resolve(__dirname, 'changelog-template.hbs'), 'utf-8'),
          headerPartial: '',
          commitPartial: `
            {{#if (eq type "Features")}}### Features{{/if}}
            {{#if (eq type "Bug Fixes")}}### Bug Fixes{{/if}}
            {{#if (eq type "Documentation")}}### Documentation{{/if}}
            {{#if (eq type "Styles")}}### Styles{{/if}}
            {{#if (eq type "Code Refactoring")}}### Code Refactoring{{/if}}
            {{#if (eq type "Performance Improvements")}}### Performance Improvements{{/if}}
            {{#if (eq type "Tests")}}### Tests{{/if}}
            {{#if (eq type "Build System")}}### Build System{{/if}}
            {{#if (eq type "Continuous Integration")}}### Continuous Integration{{/if}}
            {{#if (eq type "Chores")}}### Chores{{/if}}
            {{#if (eq type "Types")}}### Types{{/if}}
            {{#if (eq type "Typings")}}### Typings{{/if}}
            {{#if (eq type "Reverts")}}### Reverts{{/if}}

            {{#each commits}}
            - {{this.subject}}
            {{/each}}`,
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
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