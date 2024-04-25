import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataProjects from '../assets/data/dataProjects.json'

const Projet = () => {
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    // const [hosting, setHosting] = useState()

    useEffect(() => {
        const data = dataProjects.find((array) => array.name == id)
        if (!data) {
            navigate('/')
        } else {
            console.log(data)
        }
    }, [id, navigate])
    return <h1>Projet</h1>
}

export default Projet
