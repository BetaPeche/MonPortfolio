import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import useThemeStore from './themeStore'
import Project from './pages/Project'

function App() {
    const { theme } = useThemeStore()
    const root = document.getElementById('root')

    if (!root) {
        return
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
                <Route path="/projet/:id" element={<Project />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
