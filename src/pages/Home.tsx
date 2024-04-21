import Banner from '../components/Banner'
import dataSkills from '../assets/data/dataSkills.json'
import dataProjects from '../assets/data/dataProjects.json'
import Skill from '../components/Skill'
import Project from '../components/Project'

const Home = () => {
    return (
        <main>
            <Banner />
            <h2>Compétences</h2>
            <section className="skills">
                {dataSkills.map((skill) => (
                    <Skill data={skill} key={skill.name} />
                ))}
            </section>
            <h2 id="projects">Projets</h2>
            <section className="projects">
                {dataProjects.map((project) => (
                    <Project data={project} key={project.name} />
                ))}
            </section>
            <h2>Qui suis-je ?</h2>
        </main>
    )
}

export default Home
