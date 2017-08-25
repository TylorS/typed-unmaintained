const expand = require('glob-expand')
const path = require('path')

const PATTERNS = ['src/*/*.ts', 'src/**/*.ts', '!src/*.test.ts', '!src/**/*.test.ts']

exports.findFiles = findFiles

function findFiles(cwd) {
  return expand({ cwd, filter: 'isFile' }, PATTERNS).map(file => path.join(cwd, file))
}