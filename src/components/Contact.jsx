import {Mail, FaLinkedin, MapPin} from '../assets/Icons.jsx'

export function Contact() {
    return(
        <section id='contacto'className='
        pt-5 pb-1
        lg:mt-5 lg:mb-6 lg:rounded-2xl lg:border lg:border-colorSutilBoard lg:px-4 lg:py-4
        '>
            <article>
                <h3 className='
                text-colorTextSecondary
                mb-1
                '> Contacto </h3>
                <p className='
                text-colorTextTerciary text-xs
                mb-2
                '> ¿Tienes una idea o un proyecto? ¡Me encantaría saber de ti!</p>
                <div className='
                text-xs text-colorTextTerciary
                flex flex-col gap-1.5
                '>
                    <span className='flex gap-1.5 items-center'>
                        <MapPin size={20} strokeWidth={1.8} aria-hidden='true'
                        className='text-colorBrightnessPurple'/> 
                        <span> Lima, Perú</span>
                    </span>
                    <FaLinkedin size={25} color='var(--color-Linkedin)' aria-hidden='true'/>
                </div>
            </article>
        </section>
    )
}
