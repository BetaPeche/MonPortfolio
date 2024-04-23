import useThemeStore from '../themeStore'

const Banner = () => {
    const { theme } = useThemeStore()

    return (
        <div className="banner">
            <img
                src={
                    theme === 'light'
                        ? './img/homepageBannerLight.webp'
                        : './img/homepageBannerDark.webp'
                }
                alt=""
            />
            <div className="banner-content">
                <h1>Bonjour !!!</h1>
                <p>
                    Je suis <strong>Loïc Pellegrino</strong> développeur web
                    <strong> front-end.</strong>
                </p>
            </div>
        </div>
    )
}

export default Banner
