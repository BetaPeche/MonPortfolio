import useThemeStore from '../themeStore'

const Banner = () => {
    const { theme } = useThemeStore()

    return (
        <div className="banner">
            <img
                src={
                    theme === 'light'
                        ? './img/ImagePortfolio.webp'
                        : './img/ImagePortfolioDark.webp'
                }
                alt=""
            />
            <div className="banner-content">
                <h1>Bonjour !</h1>
                <p>Test</p>
            </div>
        </div>
    )
}

export default Banner
