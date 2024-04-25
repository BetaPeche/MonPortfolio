import { useParams } from 'react-router-dom'

const Projet = () => {
    const { id } = useParams()
    console.log(id)
    return <h1>Projet</h1>
}

export default Projet
