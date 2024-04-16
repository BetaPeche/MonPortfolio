import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Make with &#x1FA77; by me</p>
                <div className="footer-links">
                    <Link
                        to="https://github.com/BetaPeche"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="./img/githubdark.webp" alt="logo github" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/lo%C3%AFc-pellegrino-927295295/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="./img/linkedin.webp" alt="logo linkedin" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
