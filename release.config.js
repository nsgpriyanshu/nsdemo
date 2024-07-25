const fs = require('fs')
const path = require('path')

module.exports = {
  branches: ['main'],
  plugins: [
    [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/github",
        "@semantic-release/git",
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
        writerOpts: {
          transform: (commit, context) => {
            const issues = []
            commit.notes.forEach(note => {
              note.title = 'BREAKING CHANGES'
            })
            if (commit.type === 'feat') {
              commit.type = 'Added'
            } else if (commit.type === 'fix') {
              commit.type = 'Changed'
            } else if (commit.type === 'docs') {
              commit.type = 'Documentation'
            } else if (commit.type === 'style') {
              commit.type = 'Styles'
            } else if (commit.type === 'refactor') {
              commit.type = 'Refactoring'
            } else if (commit.type === 'perf') {
              commit.type = 'Performance'
            } else if (commit.type === 'test') {
              commit.type = 'Tests'
            } else if (commit.type === 'build') {
              commit.type = 'Build'
            } else if (commit.type === 'ci') {
              commit.type = 'CI'
            } else if (commit.type === 'chore') {
              commit.type = 'Chores'
            } else {
              return
            }
            if (commit.scope === '*') {
              commit.scope = ''
            }
            if (typeof commit.hash === 'string') {
              commit.hash = commit.hash.substring(0, 7)
            }
            return commit
          },
          mainTemplate: fs.readFileSync(path.resolve(__dirname, 'changelog-template.hbs'), 'utf-8'),
          headerPartial: '',
          commitPartial: `{{#if (eq type "Added")}}### Added{{/if}}
          {{#if (eq type "Changed")}}### Changed{{/if}}
          {{#if (eq type "Documentation")}}### Documentation{{/if}}
          {{#if (eq type "Styles")}}### Styles{{/if}}
          {{#if (eq type "Refactoring")}}### Refactoring{{/if}}
          {{#if (eq type "Performance")}}### Performance{{/if}}
          {{#if (eq type "Tests")}}### Tests{{/if}}
          {{#if (eq type "Build")}}### Build{{/if}}
          {{#if (eq type "CI")}}### CI{{/if}}
          {{#if (eq type "Chores")}}### Chores{{/if}}

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
}