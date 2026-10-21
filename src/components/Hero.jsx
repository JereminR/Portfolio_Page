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
        <section className='flex flex-col gap-4.5'>
            <article
            className='
            -mx-6 px-6 -my-8 py-8
            border-b border-colorSutilBoard pb-9.5
            bg-no-repeat bg-bottom-right bg-cover'
            style={{backgroundImage: `linear-gradient(rgba(8, 9, 20, 0.6), rgba(8, 9, 20, 0.6)), url(${FondoPúrpura})`}}
            >
                <span className='text-colorTextSecondary text-lg font-medium'> Bienvenido(a), soy </span>
                <h1 className='text-colorTextPrimary text-3xl font-bold leading-tight'> 
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
                '> 
                Creo soluciones web que combinan diseño, funcionalidad y una gran experiencia de usuario. 
                </p>
                <div className='
                flex gap-5
                '>
                    <button className='
                    text-colorTextSecondary
                        bg-linear-to-r from-colorAcentPrimary to-violet-600
                        border border-colorSutilBoard rounded-lg
                        min-w-37
                        py-3.5
                        cursor-pointer
                        transition-transform
                        hover:brightness-110
                    '> Ver proyectos </button>
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

            <article className='border-b border-colorSutilBoard pb-6'>
                <div className='flex flex-row gap-2 justify-evenly'>
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