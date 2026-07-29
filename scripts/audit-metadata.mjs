import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const routesDir = path.join(rootDir, 'src', 'routes')

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(fullPath)
    return fullPath.endsWith('.tsx') ? [fullPath] : []
  })
}

const files = walk(routesDir)
const titleMap = new Map()
const descriptionMap = new Map()
const results = []

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const titleMatches = [...content.matchAll(/title:\s*'([^']+)'/g)].map((m) => m[1])
  const descriptionMatches = [...content.matchAll(/description:\s*'([^']+)'/g)].map((m) => m[1])

  if (titleMatches.length > 0) {
    results.push({ file, type: 'title', values: titleMatches })
    for (const title of titleMatches) {
      const list = titleMap.get(title) || []
      list.push(file)
      titleMap.set(title, list)
    }
  }

  if (descriptionMatches.length > 0) {
    results.push({ file, type: 'description', values: descriptionMatches })
    for (const description of descriptionMatches) {
      const list = descriptionMap.get(description) || []
      list.push(file)
      descriptionMap.set(description, list)
    }
  }
}

const duplicateTitles = [...titleMap.entries()].filter(([, filesForValue]) => filesForValue.length > 1)
const duplicateDescriptions = [...descriptionMap.entries()].filter(([, filesForValue]) => filesForValue.length > 1)

console.log(`Scanned ${files.length} route files.`)

if (duplicateTitles.length === 0 && duplicateDescriptions.length === 0) {
  console.log('No duplicate literal title/description values found.')
  process.exit(0)
}

if (duplicateTitles.length > 0) {
  console.log('\nDuplicate titles:')
  for (const [title, filesForValue] of duplicateTitles) {
    console.log(`- ${title}`)
    for (const file of filesForValue) {
      console.log(`  - ${path.relative(rootDir, file)}`)
    }
  }
}

if (duplicateDescriptions.length > 0) {
  console.log('\nDuplicate descriptions:')
  for (const [description, filesForValue] of duplicateDescriptions) {
    console.log(`- ${description}`)
    for (const file of filesForValue) {
      console.log(`  - ${path.relative(rootDir, file)}`)
    }
  }
}

process.exitCode = 1