import {navItems} from '../constants/navItems.js';
import {
  ChevronRight,
  SiGithub,
  FaLinkedin
} from '../assets/Icons.jsx';


const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/JereminR",
    Icon: SiGithub
  },
  
  {
    id: 2,
    name: "FaLinkedIn",
    link: "https://www.linkedin.com/in/jeremin-roman-6258ab3a0/",
    Icon: FaLinkedin
  }
];


export function Footer() {
    return(
        <footer className='
        px-6 pt-6 pb-12 md:pb-7
        border-t border-colorTextSecondary rounded-3xl
        md:grid md:grid-cols-1
        lg:gap-6 lg:px-6 lg:py-5
        xl:px-8
        '>  <div className='
            md:border-b border-colorSutilBoard
            md:grid md:grid-cols-2 md:gap-96 
            '>
                <div className='
                    text-colorTextPrimary
                    pb-6
                    border-b border-colorSutilBoard
                    md:border-0
                    '>
                        <span className='text-2xl'> JNR </span>
                        <div className='
                        mt-3
                        flex gap-3
                        '>
                            {
                                socialLinks.map(({id, name, link, Icon})=>{
                                    return(
                                        <a key={id} href={link} name={name} target='_blank' rel='noreferrer'
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
                    pt-5 pb-6 md:pt-0 
                    border-b border-colorSutilBoard
                    md-border-0
                    '>
                        <span className='
                        text-colorAcentSecondary
                        '> Enlaces rápidos </span>
                        <ul className='
                        text-colorTextSecondary
                        mt-3
                        flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3
                        '>
                            {
                                navItems.map(({name, href})=>{
                                    return(
                                        <li key={name} className='flex justify-between'>
                        
                                            <a href={href} className='hover:text-colorAcentPrimary'>
                                                {name}
                                            </a>
                                            <ChevronRight size={18} aria-hidden='true'
                                            className='md:hidden'
                                            />
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                </div>
            </div>

            <div className='
                pt-5 lg:pt-0
                w-fit
                flex justify-between
                lg:flex-col lg:items-end lg:justify-between
                '>
                    <span className='
                    text-xs text-colorTextTerciary
                    '> ©2026 Jeremin Roman. Todos los derechos reservados. </span>
            </div>
        </footer>
    )
}