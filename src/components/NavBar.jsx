import {useEffect, useState} from 'react'
import {Folder, House, Mail, Menu, UserRound, X} from '../assets/Icons.jsx'
import {FaLinkedin} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import {navItems} from '../constants/navItems.js'

const sectionIcons = {
    '#inicio': House,
    '#sobre-mi': UserRound,
    '#proyectos': Folder,
    '#contacto': Mail
}

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jeremin-roman-6258ab3a0/',
        Icon: FaLinkedin
    },
    {
        name: 'GitHub',
        href: 'https://github.com/JereminR',
        Icon: SiGithub
    }
]

export function NavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeHref, setActiveHref] = useState(
        () => window.location.hash || '#inicio'
    )

    useEffect(() => {
        const updateActiveHref = () => {
            setActiveHref(window.location.hash || '#inicio')
        }

        window.addEventListener('hashchange', updateActiveHref)
        return () => window.removeEventListener('hashchange', updateActiveHref)
    }, [])

    const renderNavLink = ({id, name, href}, isMobile = false) => {
        const Icon = sectionIcons[href]
        const isActive = activeHref === href

        return (
            <a
                key={id}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => {
                    setActiveHref(href)
                    setIsMenuOpen(false)
                }}
                className='
                text-sm
                py-2 pl-3
                flex items-center gap-2
                '>
            
                {isMobile && <Icon size={19} strokeWidth={1.7} aria-hidden='true' />}
                {name}
            </a>
        )
    }

    return (
        <header className='
        relative z-20
        text-colorTextPrimary bg-colorNavBar
        border-b border-colorTextPrimary/15
        '>
            <div className='
            p-2.5 lg:px-6 lg:py-3 xl:px-8
            flex items-center justify-between
            '>
                <a href='#inicio' aria-label='Ir al inicio' className='
                text-2xl bg-linear-to-r from-purple-500 via-violet-600 to-fuchsia-500
                bg-clip-text text-transparent
                '>JNR</a>

                <button
                    type='button'
                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isMenuOpen}
                    aria-controls='mobile-navigation'
                    onClick={() => setIsMenuOpen(open => !open)}
                    className='
                    p-1 text-colorTextSecondary transition-colors
                    hover:text-colorTextPrimary md:hidden
                    '
                >
                    {isMenuOpen
                        ? <X size={23} strokeWidth={1.7} aria-hidden='true' />
                        : <Menu size={24} strokeWidth={2} aria-hidden='true' />}
                </button>

                <nav className='
                hidden md:flex gap-9 text-sm font-normal lg:gap-10
                ' aria-label='Navegación principal'>
                    {navItems.map(item => renderNavLink(item))}
                </nav>
            </div>

            {isMenuOpen && (
                <nav
                    id='mobile-navigation'
                    className='
                    border-t border-colorSutilBoard px-3 pb-4 pt-3
                    md:hidden
                    '
                    aria-label='Navegación móvil'
                >
                    <div className='flex flex-col gap-3'>
                        {navItems.map(item => renderNavLink(item, true))}
                    </div>

                    <div className='
                    mt-5 flex gap-6 border-t border-colorSutilBoard px-2 pt-4
                    '>
                        {socialLinks.map(({name, href, Icon}) => (
                            <a
                                key={name}
                                href={href}
                                target='_blank'
                                rel='noreferrer'
                                aria-label={name}
                                className='text-colorTextTerciary'
                            >
                                <Icon size={19} aria-hidden='true' />
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}
