import {Mail, FaLinkedin, MapPin} from '../assets/Icons.jsx'

export function Contact() {
    return(
        <section id='contacto'className='
        pt-5 pb-1
        lg:mt-5 lg:mb-6 lg:rounded-2xl lg:border lg:border-colorSutilBoard lg:px-4 lg:py-4
        '>
            <article>
                <div className='flex items-center gap-2 mb-2'>
                    <Mail className='text-colorTextPrimary'/>
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
                        <FaLinkedin size={25} color='var(--color-colorTextSecondary)' aria-hidden='true'/>
                    </a>
                </div>
            </article>
        </section>
    )
}
