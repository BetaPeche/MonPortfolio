import useThemeStore from '../themeStore'

type SkillProps = {
    data: {
        name: string
        image: string
        darkimage?: string
    }
}

const Skill: React.FC<SkillProps> = ({ data }) => {
    const { theme } = useThemeStore()

    return (
        <div className="skill">
            <div className="skill-image">
                <img
                    src={
                        theme === 'dark' && data.darkimage
                            ? data.darkimage
                            : data.image
                    }
                    alt={`logo ${data.name}`}
                />
            </div>
            <p>{data.name}</p>
        </div>
    )
}

export default Skill
