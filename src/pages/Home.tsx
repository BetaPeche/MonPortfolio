import Banner from '../components/Banner'
import DataSkills from '../assets/data/dataSkills.json'
import useThemeStore from '../themeStore'
import { Link } from 'react-router-dom'

const Home = () => {
    const { theme } = useThemeStore()
    return (
        <main>
            <Banner />
            <h2>Compétences</h2>
            <section className="skills">
                {DataSkills.map((skill) => (
                    <div className="skill" key={skill.name}>
                        <div className="skill-image">
                            <img
                                src={
                                    theme === 'dark' && skill.darkimage
                                        ? skill.darkimage
                                        : skill.image
                                }
                                alt={`logo ${skill.name}`}
                            />
                        </div>
                        <p>{skill.name}</p>
                    </div>
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
