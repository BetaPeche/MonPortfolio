import { NavLink, Link } from 'react-router-dom'
import useThemeStore from '../themeStore'

const Header = () => {
    const { theme, toggleTheme } = useThemeStore()

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
                        <NavLink
                            to="/about"
                            className={(nav) =>
                                nav.isActive ? 'active-link' : ''
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
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
