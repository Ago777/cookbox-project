import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { OrderButtons } from './components/OrderButtons'
import { AboutPage } from './pages/AboutPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { HowToOrderPage } from './pages/HowToOrderPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ReviewsPage } from './pages/ReviewsPage'

// The header sticks to the top and the contact bar to the bottom; the page
// itself scrolls, so phone browsers can hide their own toolbars.
export default function App() {
  const { pathname } = useLocation()

  // new page → back to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      <Header />

      <div className="app__scroll">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-to-order" element={<HowToOrderPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <OrderButtons />
    </div>
  )
}
