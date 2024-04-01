export const BASE_URL = '/VOTV-Secrets-Website'

export function locationHref(href, newTab = true) {
  let a = document.createElement('a')
  a.href = href
  if (newTab) {
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
  }
  a.click()
}