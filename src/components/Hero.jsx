import {AptitudesModal} from './AptitudesModal.jsx'
import {Code2, PanelsTopLeft, BookOpen, Users} from '../assets/Icons.jsx'
import FondoPúrpura from '../assets/FondoPúrpura.png'

const aptitudes = [
    {
        id:1,
        Icon: Code2,
        aptitude: 'Desarrollo Web'
    },
    {
        id:2,
        Icon: PanelsTopLeft,
        aptitude:'Diseño de interfaces'
    },
    {
        id:3,
        Icon: BookOpen,
        aptitude:'Mentalidad de aprendizaje'
    },
    {
        id:4,
        Icon: Users,
        aptitude:'Trabajo en equipo'
    }
]

export function Hero() {

return(
        <section id='inicio' className='flex flex-col gap-4.5 lg:gap-5'>
            <article
            className='
            hero-background relative isolate
            -my-8 pt-8
            pb-5.5 md:pb-7.5 lg:pb-9.5 lg:border-0
            lg:py-10'
            style={{
                '--hero-background': `linear-gradient(rgba(8, 9, 20, 0.6), rgba(8, 9, 20, 0.6)), url(${FondoPúrpura})`
            }}
            >
                <span className='text-colorTextSecondary text-lg font-medium lg:text-xl'> Bienvenido(a), soy </span>
                <h1 className='text-colorTextPrimary text-3xl font-bold leading-tight lg:text-4xl'>
                    Jeremin 
                    <span className='text-colorAcentPrimary'> Roman </span>
                </h1>
                <span className='text-colorTextSecondary text-sm font-medium'> Ingeniero de Sistemas | Desarrollador Web </span>
                <p className='
                text-colorTextTerciary
                text-sm text-pretty
                max-w-11/12
                mt-2.5 mb-5
                leading-relaxed
                lg:max-w-xl
                '> 
                Creo soluciones web que combinan diseño, funcionalidad y una gran experiencia de usuario. 
                </p>
                <div className='
                flex gap-5
                '>
                    <a href='#proyectos' className='
                    text-colorTextSecondary text-center
                        bg-linear-to-r from-colorAcentPrimary to-violet-600
                        border border-colorSutilBoard rounded-lg
                        min-w-37
                        py-3.5
                        cursor-pointer
                        transition-transform
                        hover:brightness-110
                    '> Ver proyectos </a>
                    <button className='
                    text-colorTextSecondary
                        bg-colorBackgroundPrimary
                        border border-colorAcentPrimary rounded-lg
                        min-w-37
                        py-3.5
                        cursor-pointer
                        transition-transform
                        hover:brightness-120
                    '> CV </button>
                </div>
            </article>

            <article className='
            pt-5 pb-6  lg:px-4 lg:py-6 mt-6
            border-b border-t border-colorSutilBoard  lg:rounded-2xl lg:border
            '>
                <div className='flex flex-row gap-2 justify-evenly lg:gap-5'>
                    {
                        aptitudes.map(({id, Icon, aptitude})=>{
                            return(
                                <AptitudesModal key={id} Icon={Icon} aptitude={aptitude}></AptitudesModal>
                            );
                        })
                    }
                </div>
            </article>
        </section>
    )
}