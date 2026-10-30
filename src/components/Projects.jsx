import {ProjectModal} from './ProjectModal.jsx'
import TicTacToe from '../assets/TicTacToe.png'
import VillainBanner from '../assets/VillainBanner.png'
import PortfolioPage from '../assets/PortfolioPage.png'
import {SiGithub, SiFigma, SiNotion, FolderCode} from '../assets/Icons.jsx';

const projects = [
    {
        id:7,
        img: PortfolioPage,
        name: 'Portafolio personal',
        description: 'Mi sitio web personal, donde muestro mi perfil, mis proyectos, habilidades y más',
        herramientas: ['React', 'TailwindCSS', 'JS'],
        Icono: [SiGithub],
        enlace: 'https://github.com/JereminR/Portfolio_Page',
    },
    
    {
        id:8,
        img: VillainBanner,
        name: 'Villanos (UX/UI)',
        description: 'Caso de estudio sobre un análisis UX/UI de una página de villanos',
        herramientas: ['Figma', 'Notion', 'UX/UI'],
        Icono: [SiFigma, SiNotion],
        enlace:[
            'https://www.figma.com/proto/9v6IVUudDbaseeMvpFrNQG/VILLAINY---Mobile-Editorial-UI---Case-Study?node-id=678-75&p=f&t=zA1XZw3GT7fEpapx-1&scaling=scale-down&content-scaling=fixed&page-id=86%3A2',
            'https://app.notion.com/p/UX-Case-study-Why-are-villains-so-memorable-2cc3a2fab0fd80a092fdeba90d8e7405?source=copy_link'
        ],
    },
    
    {
        id:9,
        img: TicTacToe,
        name: 'Tic-Tac-Toe 4x4',
        description: 'Videojuego de tic-tac-toe, donde el primero en completar 4 líneas gana',
        herramientas: ['React', 'TailwindCSS', 'JS'],
        Icono: [SiGithub],
        enlace:'https://github.com/JereminR/Tic_Tac_Toe_4x4',
    }
]

export function Projects() {
    return(
        <section id='proyectos'className='
        pt-5 pb-6
        border-b border-colorSutilBoard
        lg:col-span-2 lg:border-b-0
        '>
            <article>
                <div className='
                flex items-center gap-2 mb-2
                font-medium
                '>
                    <FolderCode className='text-colorAcentPrimary'/>
                    <h2 className='text-colorTextPrimary'> Proyectos </h2>
                </div>
                <div className='
                flex flex-col gap-5 mt-3.5
                md:grid md:grid-cols-2 md:gap-5
                lg:grid-cols-3 lg:gap-3 xl:gap-5
                
                '>
                    {
                        projects.map((project)=>{
                            return(
                                <ProjectModal key={project.id}
                                img={project.img} name={project.name}
                                description={project.description} herramientas={project.herramientas}
                                Icono={project.Icono} enlace={project.enlace}
                                > </ProjectModal>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}
