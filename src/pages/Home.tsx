import Banner from '../components/Banner'
import DataSkills from '../assets/data/dataSkills.json'
import useThemeStore from '../themeStore'

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
                <div className="test"></div>
                <div className="test"></div>
                <div className="test"></div>
                <div className="test"></div>
            </section>
            <h2>Qui suis je ?</h2>
        </main>
    )
}

export default Home
