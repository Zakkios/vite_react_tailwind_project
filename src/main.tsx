import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './pages/Error404.tsx'
import HomePage from './pages/HomePage.tsx'
import Quotes from './pages/Quotes.tsx'
import Navbar from './components/Navbar.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </BrowserRouter>
)
