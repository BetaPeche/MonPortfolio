import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import useThemeStore from './themeStore'
import Projet from './pages/Projet'

function App() {
    const { theme } = useThemeStore()
    const root = document.getElementById('root')

    if (!root) {
        return null
    }

    if (theme === 'dark') {
        root.className = 'dark'
    } else {
        root.className = 'light'
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<Projet />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
