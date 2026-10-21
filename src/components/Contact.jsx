import {Mail, FaLinkedin, MapPin} from '../assets/Icons.jsx'

export function Contact() {
    return(
        <section className='
        pt-5 pb-5
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
                    <span className='flex gap-1.5 items-center'>
                        <Mail size={20} aria-hidden='true'
                        className='text-colorBrightnessPurple'/>
                    </span>
                    <FaLinkedin size={20} color='var(--color-Linkedin)' aria-hidden='true'/>
                </div>
            </article>
        </section>
    )
}
