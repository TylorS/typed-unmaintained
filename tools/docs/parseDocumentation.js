const path = require('path')
const fs = require('fs')
const dox = require('dox')
const { ascend, flatten, find, propEq, dropLast, last } = require('167')

exports.parseDocumentation = parseDocumentation

const readSource = file => fs.readFileSync(file).toString()

function parseDocumentation(files) {
  return flatten(files.map(file => parseComments(readSource(file)).map(foo(file))))
    .filter(Boolean)
    .sort(ascend(({ name }) => name))
}

function foo(file) {
  return function(parsedComments) {
    const { description: { full }, tags, code, ignore } = parsedComments

    if (!tags || tags.length === 0 || ignore) return null

    const { string: name } = find(propEq('type', 'name'), tags) || {}
    const { string: example = '' } = find(propEq('type', 'example'), tags) || {}
    const type = find(propEq('type', 'type'), tags)

    return {
      file: path.relative(process.cwd(), file),
      description: full,
      name,
      example,
      code: trimExcess(code),
      type: !!type,
    }
  }
}

function trimExcess(code) {
  code = code.trim()

  if (code.endsWith('{')) {
    const lastLine = last(code.split('\n'))
    
    // merged namespace
    if (lastLine.startsWith('export namespace'))
      return code.replace(/export\snamespace\s[A-Za-z0-9]+(\s)+{?/, '').trim()
  }

  return code
}

function parseComments(source) {
  return dox.parseComments(source, { raw: true, skipSingleStar: true })
}
