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
    Sparkles,
    BrainCircuit,
} from '../assets/Icons.jsx'

const skills = [
    {
        id:10,
        Icon:SiHtml5,
        skill: 'HTML',
        color: 'color-Html'
    },

    {
        id:11,
        Icon:FaCss3,
        skill: 'CSS',
        color:'color-Css'
    },

    {
        id:12,
        Icon:FaJs,
        skill: 'JS',
        color:'color-JS'
    },

    {
        id:13,
        Icon:SiReact,
        skill: 'React',
        color:'color-React'
    },

    {
        id:14,
        Icon:SiTailwindcss,
        skill: 'Tailwind CSS',
        color:'color-TailwindCss'
    },

    {
        id:15,
        Icon:SiFigma,
        skill: 'Figma',
        color:'color-Figma'
    },

    {
        id:16,
        Icon:SiGithub,
        skill: 'Git & GitHub',
        color:'color-GitHub'
    },
    {
        id:17,
        Icon:PenTool,
        skill: 'UX/UI',
        color:'color-colorAcentPrimary'
    },
    {
        id:18,
        Icon:Sparkles,
        skill: 'Heramientas de IA',
        color:'color-Css'
    }
]

export function Skills() {
    return(
        <section className='
        pt-5 pb-6
        '>
            <article>
                <div className='
                font-medium
                mb-2
                flex items-center gap-2'>
                    <BrainCircuit size={24} className='text-colorTextPrimary'/>
                    <h3 className='
                    text-colorTextPrimary
                    '>
                        Habilidades 
                    </h3>
                </div>

                <div className='
                items-center
                grid grid-cols-3 grid-rows-auto gap-3 md:grid-cols-3 md:justify-center lg:grid-cols-3 lg:gap-2 xl:gap-3
                mt-3.5
                '>
                    {
                        skills.map(({id, Icon, skill, color})=>{
                            return(
                                <SkillModal key={id} Icon={Icon} skill={skill} color={color}></SkillModal>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}
