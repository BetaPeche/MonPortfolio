import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect } from 'react'
import useThemeStore from './themeStore'

function App() {
    const { theme } = useThemeStore()

    useEffect(() => {
        if (theme === 'dark') {
            document.body.className = 'dark'
        } else {
            document.body.className = 'light'
        }
    }, [theme])

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
