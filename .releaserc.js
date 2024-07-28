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
          },
          writerOpts: {
            commitsSort: ['subject', 'scope'],
          },
        },
      ],
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message: 'chore(release): update changelog [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ],
    verifyConditions: [],
    prepare: [],
    publish: [],
    success: [],
    fail: [],
  };
  
  
  
  