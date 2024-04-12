import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true)
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDarkMode(true)
            isDark()
        } else {
            setDarkMode(false)
            isLight()
        }
    }, [])

    const isDark: () => void = () => {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }

    const isLight: () => void = () => {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
        localStorage.setItem('theme', 'light')
    }

    const toggleDarkMode: () => void = () => {
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
                    aria-label="Change le theme en dark ou light"
                ></button>
            </nav>
        </header>
    )
}

export default Header
