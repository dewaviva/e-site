import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { CartDrawer } from '@/components/CartDrawer'
import { ToastContainer } from '@/components/Toast'
import { Footer } from '@/components/Footer'
import { buildSeoMeta } from '@/seo/buildSeoMeta'

import '../styles.css'

export const Route = createRootRoute({
  head: () => {
    const seo = buildSeoMeta({
      title: 'Gaming Store',
      description:
        'Toko e-commerce modern dengan koleksi perlengkapan teknologi, audio audiophile, smartwatch, dan barang gaya hidup urban berkualitas tinggi.',
    })

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ...seo.meta,
      ],
      links: seo.links,
      scripts: seo.scripts,
    }
  },
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      <head>
        <HeadContent />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
        <Header />
        <main className="flex-1">{children || <Outlet />}</main>
        <Footer />
        <CartDrawer />
        <ToastContainer />
        <Scripts />
      </body>
    </html>
  )
}