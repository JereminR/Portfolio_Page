import {useEffect, useRef, useState} from 'react'
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
        id: 19,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jeremin-roman-6258ab3a0/',
        Icon: FaLinkedin
    },
    {
        id: 20,
        name: 'GitHub',
        url: 'https://github.com/JereminR',
        Icon: SiGithub
    }
]

export function NavBar () {
    //Estos son para las funcionalidades principales del navbar
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeHref, setActiveHref] = useState(
        () => window.location.hash || '#inicio'
    )
    const [isHidden, setIsHidden] = useState(false)
    const [isAtTop, setIsAtTop] = useState(() => window.scrollY === 0)
    const lastScrollY = useRef(window.scrollY)
    const downwardScrollStart = useRef(window.scrollY)

    useEffect(() => {
        const updateActiveHref = () => {
            setActiveHref(window.location.hash || '#inicio')
        }

        window.addEventListener('hashchange', updateActiveHref)
        return () => window.removeEventListener('hashchange', updateActiveHref)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsAtTop(currentScrollY === 0)

            if (window.innerWidth >= 768) {
                setIsHidden(false)
                downwardScrollStart.current = currentScrollY
            } else if (isMenuOpen) {
                setIsHidden(false)
                downwardScrollStart.current = currentScrollY
            } else if (currentScrollY < lastScrollY.current) {
                setIsHidden(false)
                downwardScrollStart.current = currentScrollY
            } else if (currentScrollY - downwardScrollStart.current >= 80) {
                setIsHidden(true)
            }

            lastScrollY.current = currentScrollY
        }

        const handleResize = () => {
            const currentScrollY = window.scrollY
            setIsAtTop(currentScrollY === 0)
            lastScrollY.current = currentScrollY
            downwardScrollStart.current = currentScrollY
            setIsHidden(false)
        }

        window.addEventListener('scroll', handleScroll, {passive: true})
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [isMenuOpen])
    //Hasta acá son las funcionalidades principales del navbar


    const renderNavLink = ({id, name, href}, isMobile = false) => {
        const Icon = sectionIcons[href]
        const isActive = activeHref === href

        return (
            <a
                key={id}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                onClick={event => {
                    if (href === '#inicio') {
                        event.preventDefault()
                        window.scrollTo({top: 0, behavior: 'smooth'})
                    }
                    setActiveHref(href)
                    setIsMenuOpen(false)
                }}
                className='
                text-sm text-colorTextPrimary
                border-b-2 border-transparent
                pt-2 pb-1.5 ml-3
                flex items-center
                transition-colors
                hover:text-colorAcentSecondary hover:border-colorAcentSecondary
                '>
            
                {isMobile && <Icon size={19} strokeWidth={1.7} aria-hidden='true' />}
                {name}
            </a>
        )
    }

    return (
        <header className={`
        sticky top-0 z-20 md:sticky
        text-colorTextPrimary border-b border-colorSutilBoard
        ${isAtTop ? 'bg-transparent' : 'bg-colorBackgroundPrimary'}
        transition-transform duration-200 ease-in-out md:translate-y-0
        ${isHidden ? '-translate-y-full' : ''}
        `}>
            <div className='
            p-2.5 md:px-6 lg:px-6 lg:py-3 xl:px-8
            flex items-center justify-between
            '>
                <a href='#inicio' aria-label='Ir al inicio' onClick={event => {
                    event.preventDefault()
                    setActiveHref('#inicio')
                    window.scrollTo({top: 0, behavior: 'smooth'})
                }} className='
                text-2xl bg-linear-to-r from-purple-500 via-violet-600 to-fuchsia-500
                bg-clip-text text-transparent
                '>JNR</a>

                <button
                    type='button'
                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isMenuOpen}
                    aria-controls='mobile-navigation'
                    onClick={() => {
                        const shouldOpen = !isMenuOpen
                        const currentScrollY = window.scrollY
                        lastScrollY.current = currentScrollY
                        downwardScrollStart.current = currentScrollY
                        if (shouldOpen) setIsHidden(false)
                        setIsMenuOpen(shouldOpen)
                    }}
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
                text-sm font-medium
                hidden md:flex gap-9  lg:gap-10
                ' aria-label='Navegación principal'>
                    
                    {navItems.map(item => renderNavLink(item))}
                </nav>
            </div>

            {isMenuOpen && (
                <nav
                    id='mobile-navigation'
                    className='
                    absolute left-0 right-0 top-full z-10
                    border-t border-colorSutilBoard bg-colorBackgroundPrimary
                    px-3 pb-4 pt-3 shadow-lg
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
                        {socialLinks.map(({id, name, url, Icon}) => (
                            <a
                                key={id}
                                href={url}
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
