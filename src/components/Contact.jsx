import {Mail, FaLinkedin, Construction} from '../assets/Icons.jsx'

export function Contact() {
    return(
        <section id='contacto'className='
        pt-5 pb-1
        lg:mt-5 lg:mb-6 lg:rounded-2xl lg:border lg:border-colorSutilBoard lg:px-4 lg:py-4
        '>
            <article>
                <div className='
                font-medium
                mb-2
                flex items-center gap-2
                '>
                    <Mail className='text-colorAcentPrimary'/>
                    <h3 className='
                    text-colorTextSecondary
                    mb-1
                    '> Contacto </h3>
                </div>
                <p className='
                text-colorTextTerciary text-xs
                mb-3
                '> ¿Tienes una idea o un proyecto? ¡Me encantaría saber de ti!</p>
                <div className='
                text-xs text-colorTextTerciary
                flex flex-col gap-1.5
                '>
                    <a href='https://www.linkedin.com/in/jeremin-roman-6258ab3a0/' target='_blank' rel='noopener noreferrer' className='flex items-center gap-1.5'>
                        <FaLinkedin size={28} color='var(--color-colorTextPrimary)' aria-hidden='true'/>
                    </a>
                </div>
                <div className='
                mt-1
                hidden lg:flex lg:flex-col lg:items-center lg:justify-center
                '>
                    <Construction size={80} color='var(--color-colorAcentPrimary)' strokeWidth={1.5} aria-hidden='true'/>
                    <span className='
                    text-colorTextPrimary font-bold
                    '>
                    ¡Estamos trabajando en ello!
                    </span>
                    <span className='
                    text-colorAcentPrimary text-sm font-medium
                    '>
                        Sección en construcción
                    </span>
                    <span className='
                    text-colorTextTerciary text-sm text-center
                    '>
                        Pronto encontrará más formas de ponerse en contacto conmigo. ¡Gracias por su paciencia!
                    </span>
                </div>
            </article>
        </section>
    )
}
