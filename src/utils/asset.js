// Prefix public/ files with Vite's base path, so images keep working
// if the site is later hosted under a sub-path (e.g. GitHub Pages).
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

// Every product photo has a smaller "-sm" twin (540px) next to the full one (1080px),
// so phones download roughly a quarter of the bytes. See src/data/products.js.
export function smallAsset(path) {
  return asset(path.replace(/\.jpg$/, '-sm.jpg'))
}

export function photoSrcSet(path) {
  return `${smallAsset(path)} 540w, ${asset(path)} 1080w`
}
