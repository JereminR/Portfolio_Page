import {ProjectModal} from './ProjectModal.jsx'
import TicTacToe from '../assets/TicTacToe.png'
import VillainBanner from '../assets/VillainBanner.png'
import PortfolioPage from '../assets/PortfolioPage.png'

const projects = [
    {
        id:1,
        img: PortfolioPage,
        name: 'Portafolio personal',
        description: 'Mi sitio web personal, donde muestro mi perfil, mis proyectos, habilidades y más',
        herramientas: ['React', 'TailwindCSS', 'JS']
    },
    
    {
        id:2,
        img: VillainBanner,
        name: 'Villanos (UX/UI)',
        description: 'Caso de estudio sobre un análisis UX/UI de una página de villanos',
        herramientas: ['Figma', 'Notion', 'UX/UI']
    },
    
    {
        id:3,
        img: TicTacToe,
        name: 'Tic-Tac-Toe 4x4',
        description: 'Videojuego de tic-tac-toe, donde el primero en completar 4 líneas gana',
        herramientas: ['React', 'TailwindCSS', 'JS']
    }
]

export function Projects() {
    return(
        <section className='
        pt-5 pb-6
        border-b border-colorSutilBoard
        '>
            <article>
                <h2 className='text-colorTextPrimary'> Proyectos </h2>
                <div className='
                flex flex-col gap-5 mt-3.5
                
                '>
                    {
                        projects.map((project)=>{
                            return(
                                <ProjectModal key={project.id}
                                img={project.img} name={project.name}
                                description={project.description} herramientas={project.herramientas}
                                > </ProjectModal>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}
