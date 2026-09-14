import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactBar } from './components/ContactBar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AboutPage } from './pages/AboutPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'

// New page → start at the top (hash links like #products still scroll normally).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Header is sticky (tablet/desktop) and ContactBar is fixed at the bottom,
// so on desktop only the content between them moves.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ContactBar />
    </>
  )
}
