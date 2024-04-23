import Banner from '../components/Banner'
import dataSkills from '../assets/data/dataSkills.json'
import dataProjects from '../assets/data/dataProjects.json'
import Skill from '../components/Skill'
import Card from '../components/Card'

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
                    <Card data={project} key={project.name} />
                ))}
            </section>
            <h2 id="about-me">Qui suis-je ?</h2>
            <section className="about-me">
                <img src="./img/loic.webp" alt="" />
                <p>
                    Bonjour, je suis un développeur web passionné basé dans un
                    charmant village de l'Aveyron. À 33 ans, père de deux
                    merveilleux enfants, je suis un amoureux de la nature et un
                    curieux invétéré. <br />
                    <br />
                    Après avoir passé 13 ans dans l'industrie agroalimentaire,
                    j'ai entrepris un projet entrepreneurial ambitieux de rachat
                    d'usine. Bien que ce projet n'ait pas abouti comme prévu, il
                    m'a inspiré à suivre ma véritable passion : l'informatique
                    et le développement web.
                    <br />
                    <br /> En transition vers une nouvelle carrière dans le
                    développement web, chaque projet renforce mes compétences et
                    ma passion pour ce domaine fascinant.
                    <br />
                    <br /> Merci de prendre le temps de découvrir mon parcours
                    et mes projets !
                    <br />
                    <br />« JE NE PERDS JAMAIS, SOIT JE GAGNE, SOIT J’APPRENDS.
                    » <br />
                    NELSON MANDELA
                </p>
            </section>
        </main>
    )
}

export default Home
