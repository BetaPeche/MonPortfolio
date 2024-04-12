import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDarkMode(true)
            isDark()
        } else {
            setDarkMode(false)
            isLight()
        }
    }, [])

    const isDark = () => {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }

    const isLight = () => {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
        localStorage.setItem('theme', 'light')
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            isLight()
        } else {
            isDark()
        }
    }

    return (
        <header>
            <Link to="/">Loïc Pellegrino</Link>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={(nav) =>
                                nav.isActive ? 'active-link' : ''
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
                <button
                    className={darkMode ? 'dark' : 'light'}
                    onClick={toggleDarkMode}
                ></button>
            </nav>
        </header>
    )
}

export default Header
