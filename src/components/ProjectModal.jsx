
export function ProjectModal({img, name, description, herramientas}) {
    return(
        <div className='
        border border-colorSutilBoard rounded-xl
        '>
            <div className='
            text-colorTextSecondary
            bg-colorElevatedCard
            '> {img} </div>

            <div className='
            px-3 pt-3 pb-2.5
            '>
                <span className='
                text-colorTextSecondary text-sm
                '> {name} </span>

                <p className='
                text-colorTextTerciary text-xs
                '> {description} </p>

                <div className='
                flex gap-3
                mt-2.5
                '>
                    {
                        herramientas.map((herramienta)=>{
                            return(
                                <div className='
                                text-colorTextSecondary text-xs
                                bg-colorElevatedCard
                                py-1.5 px-3.5
                                border border-colorSutilBoard rounded-2xl
                                '>
                                    {herramienta}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
