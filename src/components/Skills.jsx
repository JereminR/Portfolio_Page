import {SkillModal} from './SkillModal.jsx'
import {
    SiHtml5, 
    FaCss3,
    FaJs,
    SiReact,
    SiTailwindcss,
    SiFigma,
    SiGithub,
    PenTool,
    Sparkles
} from '../assets/Icons.jsx'

const skills = [
    {
        id:1,
        Icon:SiHtml5,
        skill: 'HTML',
        color: 'color-Html'
    },

    {
        id:2,
        Icon:FaCss3,
        skill: 'CSS',
        color:'color-Css'
    },

    {
        id:3,
        Icon:FaJs,
        skill: 'JS',
        color:'color-JS'
    },

    {
        id:4,
        Icon:SiReact,
        skill: 'React',
        color:'color-React'
    },

    {
        id:5,
        Icon:SiTailwindcss,
        skill: 'Tailwind CSS',
        color:'color-TailwindCss'
    },

    {
        id:6,
        Icon:SiFigma,
        skill: 'Figma',
        color:'color-Figma'
    },

    {
        id:7,
        Icon:SiGithub,
        skill: 'Git & GitHub',
        color:'color-GitHub'
    },
    {
        id:8,
        Icon:PenTool,
        skill: 'UX/UI',
        color:'color-colorAcentPrimary'
    },
    {
        id:9,
        Icon:Sparkles,
        skill: 'Heramientas de IA',
        color:'color-Css'
    }
]

export function Skills() {
    return(
        <section className='
        pt-5 pb-6
        border-b border-colorSutilBoard
        '>
            <article>
                <h3 className='
                text-colorTextPrimary
                '>
                    Habilidades 
                </h3>

                <div className='
                grid grid-cols-3 grid-rows-auto gap-3
                mt-3.5
                '>
                    {
                        skills.map(({Icon, skill, color})=>{
                            return(
                                <SkillModal Icon={Icon} skill={skill} color={color}></SkillModal>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}
