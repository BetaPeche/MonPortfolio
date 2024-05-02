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
        link?: string
        github_link?: string
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
            <section className="presentation">
                <img src={project.image} alt="" />
                <div className="presentation-text">
                    <h2>Présentation:</h2>
                    <p>{project.description}</p>
                    <div className="presentation-links">
                        {project.github_link && (
                            <a
                                href={project.github_link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i> Github
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-paperclip"></i> Lien
                                vers le projet
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Project
