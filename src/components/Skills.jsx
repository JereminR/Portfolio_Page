import {SkillModal} from './SkillModal.jsx'
import {
    SiHtml5, 
    FaCss3,
    FaJs,
    SiReact,
    SiTailwindcss,
    SiFigma,
    SiGithub
} from '../assets/Icons.jsx'

const skills = [
    {
        id:1,
        Icon:SiHtml5,
        skill: 'HTML'
    },

    {
        id:2,
        Icon:FaCss3,
        skill: 'CSS'
    },

    {
        id:3,
        Icon:FaJs,
        skill: 'JS'
    },

    {
        id:4,
        Icon:SiReact,
        skill: 'React'
    },

    {
        id:5,
        Icon:SiTailwindcss,
        skill: 'Tailwind CSS'
    },

    {
        id:6,
        Icon:SiFigma,
        skill: 'Figma'
    },

    {
        id:7,
        Icon:SiGithub,
        skill: 'Git & GitHub'
    },
    {
        id:8,
        Icon:SiHtml5,
        skill: 'UX/UI'
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
                        skills.map(({Icon, skill})=>{
                            return(
                                <SkillModal Icon={Icon} skill={skill}></SkillModal>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}
