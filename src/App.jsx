import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactBar } from './components/ContactBar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AboutPage } from './pages/AboutPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { HowToOrderPage } from './pages/HowToOrderPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ReviewsPage } from './pages/ReviewsPage'

// App shell: the header and the contact bar never move. Only the middle
// column scrolls, so the menu and the contact buttons are always reachable.
export default function App() {
  const scrollRef = useRef(null)
  const { pathname } = useLocation()

  // new page → back to the top of the scrolling column, not the window
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      <Header />

      <div className="app__scroll" ref={scrollRef}>
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
        <Footer />
      </div>

      <ContactBar />
    </div>
  )
}
