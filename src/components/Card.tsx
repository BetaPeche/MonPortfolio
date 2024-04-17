import { Link } from 'react-router-dom'

const Card = ({ project }) => {
    return (
        <Link to="/" className="test">
            <h3>Kasa</h3>
            <p>UX • UI Design</p>
            <img src="./img/mac.png" alt="" />
        </Link>
    )
}

export default Card
