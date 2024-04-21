import { Link } from 'react-router-dom'

type ProjectlProps = {
    data: {
        name: string
        keywords: string
        description: string
        image: string
        banner: string
        link: string
    }
}

const Project: React.FC<ProjectlProps> = ({ data }) => {
    return (
        <Link to={`/${data.name.replace(' ', '-')}`} className="test">
            <h3>{data.name}</h3>
            <p>{data.keywords}</p>
            <img src={data.image} alt={`Image du site ${data.name}`} />
        </Link>
    )
}

export default Project
