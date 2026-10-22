export function ProjectModal({img, name, description, herramientas, Icono, enlace}) {
    return(
        <div className='
        border border-colorSutilBoard rounded-xl
        '>

            <img src={img} alt={name} className='
            w-full h-30 object-cover rounded-t-xl
            '/>

            <div className='
            px-3 pt-3 pb-3
            '>

                <div className='
                flex flex-wrap gap-1.5
                mb-2.5
                '>
                    {
                        herramientas.map((herramienta)=>{
                            return(
                                <div key={herramienta} className='
                                text-colorTextSecondary text-xs
                                bg-colorElevatedCard
                                py-1.5 px-2 lg:px-1.5 xl:px-3.5
                                border border-colorSutilBoard rounded-2xl
                                '>
                                    {herramienta}
                                </div>
                            )
                        })
                    }
                </div>

                <span className='
                text-colorTextSecondary text-sm
                '> {name} </span>

                <p className='
                text-colorTextTerciary text-xs
                '> {description} </p>
                
                <div className='
                flex gap-1.5 items-center
                text-colorTextSecondary text-xs
                mt-2.5
                '>
                    <div className='
                    mt-1
                    flex gap-4
                    '>
                        {
                            Icono.map((Icono, index)=>{
                                const url = Array.isArray(enlace) ? enlace[index] : enlace

                                return(
                                    <a key={index} href={url} target='_blank' rel='noreferrer' title='Ver proyecto'
                                    className='
                                    p-2
                                    bg-colorSurfaceCard
                                    border border-colorSutilBoard rounded-xl
                                    '>
                                        <Icono size={28} aria-hidden='true'
                                        className='text-colorBrightnessPurple'/>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
