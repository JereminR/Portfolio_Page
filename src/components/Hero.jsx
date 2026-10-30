import {AptitudesModal} from './AptitudesModal.jsx'
import FondoPúrpura from '../assets/FondoPúrpura.png'

export function Hero() {

return(
        <section id='inicio' className='
        md:mb-5 lg:mb-6
        flex flex-col gap-4.5 lg:gap-5
        '>
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
                text-colorTextTerciary text-sm text-pretty
                max-w-11/12
                mt-2.5 mb-5
                leading-relaxed
                lg:max-w-xl
                '> 
                    Desarrollo soluciones web que combinan implementación técnica, diseño y funcionalidad para crear experiencias digitales intuitivas y atractivas. 
                </p>
                <div className='
                font-medium
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
                    <a href='/CV.pdf' target='_blank' rel='noopener noreferrer' className='
                    text-colorTextSecondary text-center
                    bg-colorBackgroundPrimary
                    border border-colorAcentPrimary rounded-lg
                    min-w-37
                    py-3.5
                    cursor-pointer
                    transition-transform
                    hover:brightness-120
                    '> CV </a>
                </div>
            </article>

            <AptitudesModal aptitudesCategory='hero'/>
        </section>
    )
}