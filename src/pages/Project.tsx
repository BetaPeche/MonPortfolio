import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataProjects from '../assets/data/dataProjects.json'

const Project = () => {
    const { id } = useParams<{ id?: string }>()
    const [project, setProject] = useState<{
        name: string
        keywords: string
        description: string
        image: string
        banner: string
        link: string
    } | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) {
            return
        }

        const modifiedId = id.replace('-', ' ')

        const data = dataProjects.find((array) => array.name == modifiedId)

        if (data) {
            setProject(data)
        } else {
            navigate('/')
            return
        }
    }, [id, navigate])

    if (!project) {
        return (
            <main>
                <h1>Chargement...</h1>
            </main>
        )
    }

    return (
        <main>
            <h1>{project.name}</h1>
        </main>
    )
}

export default Project
