import { Link } from 'react-router-dom'
import useThemeStore from '../themeStore'

type CardProps = {
    data: {
        name: string
        keywords: string
        description: string
        image?: string
        image_dark?: string
        banner: string
        link?: string
        github_link?: string
    }
}

const Card: React.FC<CardProps> = ({ data }) => {
    const { theme } = useThemeStore()
    return (
        <Link to={`/${data.name.replace(' ', '-')}`} className="card">
            <h3>{data.name}</h3>
            <p>{data.keywords}</p>
            <div className="card-image">
                <img
                    src={
                        theme === 'dark' && data.image_dark
                            ? data.image_dark
                            : data.image
                    }
                    alt={`Image du site ${data.name}`}
                />
            </div>
        </Link>
    )
}

export default Card
