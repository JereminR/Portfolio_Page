
import {useEffect, useState} from 'react'
import {ArrowUp} from '../assets/Icons.jsx'

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const updateVisibility = () => {
            const threshold = window.innerWidth < 768 ? 400 : 500
            setIsVisible(window.scrollY >= threshold)
        }

        updateVisibility()
        window.addEventListener('scroll', updateVisibility, {passive: true})
        window.addEventListener('resize', updateVisibility)

        return () => {
            window.removeEventListener('scroll', updateVisibility)
            window.removeEventListener('resize', updateVisibility)
        }
    }, [])

    return (
        <button
            type='button'
            aria-label='Volver al inicio de la página'
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            title='Volver al inicio'
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className={`
                fixed bottom-5 right-5 z-30
                text-colorAcentSecondary bg-colorElevatedCard
                size-9 border border-colorTextSecondary rounded-full
                cursor-pointer
                flex justify-center items-center
                shadow-lg transition-all duration-300 ease-out
                ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-3 opacity-0'}
            `}
        >
            <ArrowUp size={16} aria-hidden='true'/>
        </button>
    )
}