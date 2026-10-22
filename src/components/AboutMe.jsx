import FondoCuarto from '../assets/FondoCuarto.png'
import {UserRound} from '../assets/Icons.jsx'

export function AboutMe() {
    return(
        <section id='sobre-mi' className='
        pt-7 pb-6
        border-b border-colorSutilBoard md:border-b-0
        lg:col-span-2 lg:pt-5
        '>
            <article className='
            flex flex-col gap-3 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center lg:gap-5
            '>
                <div>
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
                    text-colorTextTerciary text-sm
                    leading-relaxed
                    w-10/12 lg:w-full
                    mb-3
                    '> 
                        Soy estudiante de ingeniería de sistemas de 8vo ciclo apasionado por la tecnología y el desarrollo web.
                        Me gusta crear soluciones digitales con una arquitectura visual clara y accesible, y que sean visualmente atractivas.
                        Asimismo, manejo herramientas de inteligencia artificial para la agilización de procesos.
                        Me gusta explorar y aprender nuevas tecnologías, trabajar en equipo y comunicar efectivamente mis ideas. 
                    </p>
                </div>

                <img src={FondoCuarto} alt='Fondo Cuarto' className='
                w-full h-30 lg:h-52 xl:h-60
                object-cover 
                border border-colorSutilBoard rounded-xl
                '/>
                
            </article>
        </section>
    )
}
