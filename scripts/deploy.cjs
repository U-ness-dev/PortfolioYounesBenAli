#!/usr/bin/env node
const { execFileSync } = require('child_process')

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' })
}

function gitLive(args) {
  execFileSync('git', args, { stdio: 'inherit' })
}

const branch = git(['rev-parse', '--abbrev-ref', 'HEAD']).trim()
if (branch !== 'main') {
  console.error(`Aborted: you are on branch "${branch}", but deploys must be on main.`)
  console.error('Run: git checkout main')
  process.exit(1)
}

git(['add', '-A'])

const status = git(['status', '--short']).trim()
if (!status) {
  console.log('Nothing to deploy — no changes found.')
  process.exit(0)
}

const paths = status
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => line.slice(3).split(' -> ').pop().trim())

const custom = process.argv.slice(2).join(' ').trim()

let message
if (custom) {
  message = custom
} else if (paths.length === 1) {
  message = `update: ${paths[0]}`
} else if (paths.length <= 4) {
  message = `update: ${paths.slice(0, -1).join(', ')} and ${paths[paths.length - 1]}`
} else {
  message = `update: ${paths.slice(0, 3).join(', ')} (+${paths.length - 3} more files)`
}

console.log(`\nCommitting ${paths.length} file(s): ${message}\n`)
gitLive(['commit', '-m', message])

console.log('\nPushing to origin/main...\n')
gitLive(['push', 'origin', 'main'])

console.log('\nDone. The site will be live in ~30-60 seconds.')
console.log('Track the deploy: https://github.com/U-ness-dev/PortfolioYounesBenAli/actions')
