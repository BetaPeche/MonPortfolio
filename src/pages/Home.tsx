import Banner from '../components/Banner'
import DataSkills from '../assets/data/dataSkills.json'
import { Link } from 'react-router-dom'
import Skill from '../components/Skill'

const Home = () => {
    return (
        <main>
            <Banner />
            <h2>Compétences</h2>
            <section className="skills">
                {DataSkills.map((skill) => (
                    <Skill data={skill} key={skill.name} />
                ))}
            </section>
            <h2>Projets</h2>
            <section className="projects">
                <Link to="/" className="test">
                    <h3>Kasa</h3>
                    <p>UX • UI Design</p>
                    <img src="./img/mac.png" alt="" />
                </Link>
                <Link to="/" className="test">
                    <h3>Kasa</h3>
                    <p>UX • UI Design</p>
                    <img src="./img/mac.png" alt="" />
                </Link>
                <Link to="/" className="test">
                    <h3>Kasa</h3>
                    <p>UX • UI Design</p>
                    <img src="./img/mac.png" alt="" />
                </Link>
                <Link to="/" className="test">
                    <h3>Kasa</h3>
                    <p>UX • UI Design</p>
                    <img src="./img/mac.png" alt="" />
                </Link>
            </section>
            <h2>Qui suis-je ?</h2>
        </main>
    )
}

export default Home
