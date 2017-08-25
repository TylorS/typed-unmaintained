const { join } = require('path')
const { readdirSync } = require('fs')

const { generateDocs } = require('./docs/generateDocs')

const ROOT_DIRECTORY = join(__dirname, '..')
const PACKAGES_DIRECTORY = join(ROOT_DIRECTORY, 'packages')

let allPackages = readdirSync(PACKAGES_DIRECTORY)

console.log() // used to add separation between commands

const args = process.argv.slice(2)

const onlyIndex = args.indexOf('--only') > -1
  ? args.indexOf('--only') + 1
  : args.indexOf('-o') > -1 ? args.indexOf('-o') + 1 : -1

if (onlyIndex > -1) {
  const only = args[onlyIndex]

  allPackages = allPackages.filter((name) => name.indexOf(only) > -1)
}

let promise = Promise.resolve()
for (const pkg of allPackages) {
  const packageDirectory = join(PACKAGES_DIRECTORY, pkg)

  promise = promise.then(() => generateDocs(packageDirectory))
}

promise
  .then(() => {
    console.log(`\nDONE!`)
  })
  .catch(err => {
    console.error(err)

    process.exit(1)
  })
