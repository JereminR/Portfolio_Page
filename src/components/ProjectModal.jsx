
export function ProjectModal({img, name, description, herramientas}) {
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
                flex gap-3
                mb-2.5
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

                <span className='
                text-colorTextSecondary text-sm
                '> {name} </span>

                <p className='
                text-colorTextTerciary text-xs
                '> {description} </p>
            </div>
        </div>
    )
}
