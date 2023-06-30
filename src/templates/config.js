/**
 * @Author: 派同学
 * @Description: How
 */
const primaryColorMap = new Map()

// 默认配色
primaryColorMap.set('create', ['#333', '#333'])

export const templates = []

const moduleEntries = Object.entries(import.meta.glob('./modules/*/index.js', { eager: true }))

for (const [path, curModule] of moduleEntries) {
  const content = (curModule).default
  content.id = Math.ceil(Math.random() * 1000000000)
  content.type = path.split('/')[2]
  templates.push(content)
  primaryColorMap.set(content.type, [content.primaryColor, content.primaryBackground])
}

const match = module => +(module.type.match(/^\d+/))[0]
templates.sort((a, b) => match(b) - match(a))

export function getPrimaryBGColor (type) {
  return (primaryColorMap.get(type))[1]
}

export function getPrimaryColor (type) {
  return (primaryColorMap.get(type))[0]
}
