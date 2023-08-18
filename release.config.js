/* eslint-disable no-template-curly-in-string */
module.exports = {
    branch: process.env.CI_COMMIT_REF_NAME,
    analyzeCommits: '@semantic-release/commit-analyzer',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            },
        ],
        '@semantic-release/npm',
    ],
    verifyConditions: '@semantic-release/npm',
    publish: '@semantic-release/npm',
    prepare: '@semantic-release/npm',
    generateNotes: '@semantic-release/release-notes-generator',
    success: false,
    fail: false,
    npmPublish: true,
    tarballDir: '.',
    tagFormat: 'v${version}',
};
