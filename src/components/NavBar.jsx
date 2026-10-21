import {Menu, X} from '../assets/Icons.jsx'
/* El "X" es el ícono de "cerrar" que usaremos cuando implementemos la barra de navegación */

export function NavBar () {
    return(
        <header className='
        text-colorTextPrimary bg-colorNavBar
        p-2.5
        border-b border-colorTextPrimary/15
        flex items-center justify-between 
        '>
            <div className='text-2xl bg-linear-to-r from-purple-500 via-violet-600 to-fuchsia-500'> JNR </div>
            <label htmlFor="open-menu" role="button"
            className='
            text-4xl
            '
            >
                <Menu size={24} strokeWidth={2} aria-hidden='true'
                className='md:hidden'
                />
            </label>
            <nav className='
             hidden md:flex gap-9 text-sm font-normal
            '>
                <div> Inicio </div>
                <div> Sobre mí </div>
                <div> Proyectos </div>
                <div> Contacto </div>
            </nav>
        </header>
    )
}