const ts = require('typescript')
const { readdirSync } = require('fs')
const { join } = require('path')
const expand = require('glob-expand')

exports.buildPackage = buildPackage

const PATTERNS =
  [
    'src/*/*.ts',
    'src/**/*.ts',
    '!src/*.test.ts',
    '!src/**/*.test.ts',
  ]

function buildPackage(package) {
  console.log(`Compiling ${packageName(package)} with TSC...`)

  const files =
    expand({ cwd: package, filter: 'isFile' }, PATTERNS).map((file) => join(package, file))

  const COMMONJS_COMPILER_OPTIONS =
    {
      lib: [
        'dom',
        'es5',
        'es2015',
      ],
      declaration: true,
      moduleResolution: 'node',
      noImplicitAny: true,
      noUnusedParameters: true,
      noUnusedLocals: true,
      sourceMap: true,
      strictNullChecks: true,
      target: 'es5',
      module: 'commonjs',
      outDir: join(package, 'lib'),
    }

  const ES2015_COMPILER_OPTIONS =
    Object.assign({}, COMMONJS_COMPILER_OPTIONS, {
      module: 'es2015',
      outDir: join(package, 'lib.es2015'),
    })

  compile(files, package, COMMONJS_COMPILER_OPTIONS)
  compile(files, package, ES2015_COMPILER_OPTIONS)
}

function packageName(package) {
  const [, name] = package.split('packages/')

  return `@typed/${name}`
}

function compile(files, directory, compilerOptions) {
  const program = ts.createProgram(files, ts.convertCompilerOptionsFromJson(compilerOptions, directory).options)

  const result = program.emit()

  const diagnostics = ts.getPreEmitDiagnostics(program).concat(result.diagnostics)

  if (diagnostics.length > 0) {
    reportDiagnostics(diagnostics)

    process.exit(1)
  }
}

function reportDiagnostics(diagnostics) {
  diagnostics.forEach(diagnostic => {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)

    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')

    console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
  })
}
