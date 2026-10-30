import Foto from '../assets/Foto.png.jpeg'
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
            md:border-r md:border-colorSutilBoard md:pr-10
            '>
                <div className='lg:min-w-0 lg:flex-4'>
                    <div className='
                    font-medium
                    mb-2
                    flex items-center gap-2'>
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
                    w-full lg:11/12
                    mb-3
                    '> 
                        Soy estudiante de 8.º ciclo de Ingeniería de Sistemas, apasionado por la tecnología y el desarrollo frontend. 
                        Me interesa construir soluciones web que integren funcionalidad, diseño y una buena experiencia de usuario, cuidando tanto su aspecto visual como su implementación técnica.
                        
                        
                    </p>
                    <p className='
                    text-colorTextTerciary text-sm text-pretty
                    leading-relaxed
                    w-full lg:11/12
                    mb-3
                    '>
                        Integro herramientas de inteligencia artificial como apoyo en el proceso de desarrollo, desde la exploración de ideas 
                        hasta la implementación y optimización de interfaces, combinándolas con mi propio criterio para obtener resultados eficientes y de calidad.
                        Además, me gusta explorar y aprender nuevas tecnologías, trabajar en equipo y comunicar mis ideas de manera efectiva.
                    </p>
                    <AptitudesModal aptitudesCategory='aboutme'/>
                </div>

                <img src={Foto} alt='Fondo Cuarto' className='
                h-30 lg:h-60
                w-fit md:w-10/12 lg:w-auto lg:flex-1
                object-cover object-top
                border border-colorSutilBoard rounded-xl
                hidden lg:flex
                '/>
                
            </article>
        </section>
    )
}
