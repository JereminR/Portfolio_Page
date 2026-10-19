import {
  ChevronRight,
  ArrowUp,
  SiGithub,
  FaLinkedin
} from '../assets/Icons.jsx';


const socialLinks = [
  {
    name: "GitHub",
    href: "",
    Icon: SiGithub
  },
  
  {
    name: "FaLinkedIn",
    href: "",
    Icon: FaLinkedin
  }
];

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];


export function Footer() {
    return(
        <footer className='
        px-6 pt-6 pb-16
        border-t border-colorTextSecondary rounded-3xl
        '>
            <article>
                <div className='
                text-colorTextPrimary
                pb-6
                border-b border-colorSutilBoard
                '>
                    <span className='text-2xl'> JNR </span>
                    <div className='
                    mt-3
                    flex gap-3
                    '>
                        {
                            socialLinks.map(({name, href, Icon})=>{
                                return(
                                    <a key={name} href={href} name={name} target='_blank' rel='noreferrer'
                                    aria-label={name}
                                    className='
                                    p-2
                                    bg-colorSurfaceCard
                                    border border-colorSutilBoard rounded-xl
                                    '
                                    >
                                        <Icon size={24} aria-hidden='true'/>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='
                text-sm font-medium
                pt-5 pb-6
                border-b border-colorSutilBoard
                '>
                    <span className='
                    text-colorAcentPrimary
                    '> Enlaces rápidos </span>
                    <ul className='
                    text-colorTextSecondary
                    mt-3
                    flex flex-col
                    gap-3
                    '>
                        {
                            quickLinks.map(({label, href})=>{
                                return(
                                    <li key={href} className='flex justify-between'>
                                        <span> {label}</span>
                                        <a href={href}></a>
                                        <ChevronRight size={18} aria-hidden='true'/>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>

                <div className='
                pt-5
                flex justify-between
                '>
                    <span className='
                    text-xs text-colorTextTerciary
                    '> ©2026 Jeremin Roman. Todos los derechos reservados. </span>

                    <button className='
                    text-colorAcentSecondary
                    bg-colorElevatedCard
                    size-7
                    border border-colorTextSecondary rounded-full
                    flex justify-center items-center
                    '>
                        <ArrowUp size={12} aria-hidden='true'/>
                    </button>
                </div>
            </article>
        </footer>
    )
}