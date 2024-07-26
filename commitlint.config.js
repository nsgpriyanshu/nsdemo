module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'build',
          'chore',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
        ],
      ],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'scope-case': [2, 'always', 'lower-case'],
      'subject-full-stop': [2, 'never', '.'],
      'subject-case': [2, 'never', 'sentence-case'],
      'header-max-length': [2, 'always', 72],
    },
  };  