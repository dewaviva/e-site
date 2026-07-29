import products, { CATEGORIES } from '../data/products'
import { slugify } from '../utils/slugify'
import { SITE_URL } from './siteSeo'

export { SITE_URL } from './siteSeo'

export const SITE_PRODUCTS = products.map((product) => ({
  id: product.id,
  url: `${SITE_URL}/products/${slugify(product.name)}`,
  lastmod: product.updatedAt ?? null,
}))

export const SITE_COLLECTIONS = CATEGORIES.filter((c) => c !== 'Semua').map(
  (category) => ({
    id: category,
    url: `${SITE_URL}/collections/${slugify(category)}`,
  })
)

export function getSiteRoutes() {
  return {
    home: `${SITE_URL}/`,
    products: SITE_PRODUCTS.map((product) => product.url),
    collections: SITE_COLLECTIONS.map((collection) => collection.url),
  }
}

export function getAmpUrlForHome() {
  return `${SITE_URL}/amp`
}

export function getAmpUrlForProduct(productSlug: string) {
  return `${SITE_URL}/amp/products/${productSlug}`
}

export function getAmpUrlForCollection(categorySlug: string) {
  return `${SITE_URL}/amp/collections/${categorySlug}`
}

export function getAmpPathForHome() {
  return '/amp'
}

export function getAmpPathForProduct(productSlug: string) {
  return `/amp/products/${productSlug}`
}

export function getAmpPathForCollection(category: string) {
  // Note: This function might receive the raw category name or the slug.
  // Assuming it receives the slug, as it's used for path generation.
  return `/amp/collections/${category}`
}