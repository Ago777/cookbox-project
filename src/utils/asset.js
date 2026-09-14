// Prefix public/ files with Vite's base path, so images keep working
// if the site is later hosted under a sub-path (e.g. GitHub Pages).
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
