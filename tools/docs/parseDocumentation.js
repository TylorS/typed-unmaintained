const path = require('path')
const fs = require('fs')
const dox = require('dox')
const { ascend, flatten } = require('167')

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

    const [{ string: name }, { string: example } = { string: '' }, type] = tags

    return {
      file: path.relative(process.cwd(), file),
      description: full,
      name,
      example,
      code,
      type: !!type,
    }
  }
}

function parseComments(source) {
  return dox.parseComments(source, { raw: true, skipSingleStar: true })
}
