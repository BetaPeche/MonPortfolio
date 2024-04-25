import { Link } from 'react-router-dom'

type CardProps = {
    data: {
        name: string
        keywords: string
        description: string
        image: string
        banner: string
        link: string
    }
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <Link to={`projet/${data.name.replace(' ', '-')}`} className="card">
            <h3>{data.name}</h3>
            <p>{data.keywords}</p>
            <img src={data.image} alt={`Image du site ${data.name}`} />
        </Link>
    )
}

export default Card
