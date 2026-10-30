import FondoCuarto from '../assets/FondoCuarto.png'
import {UserRound} from '../assets/Icons.jsx'
import {AptitudesModal} from './AptitudesModal.jsx'

export function AboutMe() {
    return(
        <section id='sobre-mi' className='
        pt-7 pb-6
        w-full
        border-b border-colorSutilBoard md:border-b-0
        lg:col-span-2 lg:pt-5
        '>
            <article className='
            flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5
            '>
                <div className='lg:min-w-0 lg:flex-5'>
                    <div className='flex items-center gap-2 mb-2'>
                        <UserRound className='text-colorTextPrimary mb-2' />
                        <h2 className='
                        text-colorTextPrimary
                        mb-2
                        '> 
                        Sobre mí 
                        </h2>
                    </div>

                    <p className='
                    text-colorTextTerciary text-sm text-pretty
                    leading-relaxed
                    w-fit
                    mb-3
                    '> 
                        Soy estudiante de ingeniería de sistemas de 8vo ciclo apasionado por la tecnología y el desarrollo web.
                        Me gusta crear soluciones digitales con una arquitectura visual clara y accesible, que sean visualmente atractivas y
                        manejo herramientas de inteligencia artificial para la agilización de procesos.
                        
                    </p>
                    <p className='
                    text-colorTextTerciary text-sm text-pretty
                    leading-relaxed
                    w-fit
                    mb-3
                    '>
                        Me gusta explorar y aprender nuevas tecnologías, trabajar en equipo y comunicar efectivamente mis ideas.
                    </p>
                    <AptitudesModal aptitudesCategory='aboutme'/>
                </div>

                <img src={FondoCuarto} alt='Fondo Cuarto' className='
                h-30 lg:h-52 xl:h-60
                w-fit md:w-10/12 lg:w-auto lg:min-w-0 lg:flex-3
                object-cover 
                border border-colorSutilBoard rounded-xl
                hidden lg:flex
                '/>
                
            </article>
        </section>
    )
}
