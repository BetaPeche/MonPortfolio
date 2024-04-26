import { Link, useLocation } from 'react-router-dom'
import useThemeStore from '../themeStore'

const Header = () => {
    const { theme, toggleTheme } = useThemeStore()
    const sampleLocation = useLocation()

    return (
        <header>
            <Link to="/">Loïc Pellegrino</Link>
            <nav>
                {sampleLocation.pathname === '/' && (
                    <ul>
                        <li>
                            <a href="#projects">Projets</a>
                        </li>
                        <li>
                            <a href="#about-me">À propos</a>
                        </li>
                    </ul>
                )}
                <button
                    className={theme === 'dark' ? 'dark' : 'light'}
                    onClick={toggleTheme}
                    aria-label="Change le theme en dark ou light"
                ></button>
            </nav>
        </header>
    )
}

export default Header
