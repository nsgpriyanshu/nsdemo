module.exports = {
    branches: ['main'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'angular',
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          preset: 'angular',
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
    dryRun: true, // Ensures that no tag or release is created
    verifyConditions: [],
    prepare: [],
    publish: [],
    success: [],
    fail: [],
  };
  
  
  