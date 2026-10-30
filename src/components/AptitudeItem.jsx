import clsx from 'clsx'

export function AptitudeItem({Icon, aptitude, description, flexDirection}) {
    const containerClassName = clsx(
        'text-colorTextPrimary',
        '',
        'flex', flexDirection==='row'? 'flex-row gap-1.5' : 'flex-col', 'items-center gap-1',
        'lg:max-w-nonw lg:flex-1 lg:flex-row lg:gap-3',
        'overflow'
    )

    const aptitudeClassName = clsx(
        'text-xs', flexDirection==='row' ? '' : 'text-center',
        'font-medium',
        'lg:text-left',
    )

    const descriptionClassName = clsx(
        'text-xxs text-colorTextTerciary text-pretty',
        flexDirection==='row' ? '' : 'hidden lg:flex'
    )

   

    return(
        <div className={containerClassName}>
            <div className='
                bg-colorElevatedCard
                min-w-13 h-10
                border border-colorSutilBoard rounded-2xl
                flex  items-center justify-center
                lg:min-w-11
                '> <Icon size={20} strokeWidth={1.8} aria-hidden='true'
                className='text-colorBrightnessPurple'/> 
            </div>

            <div className='
            flex flex-col gap-1.5
            '>
                <span className={aptitudeClassName}> 
                    {aptitude} 
                </span>

                <span className={descriptionClassName}>
                    {description}
                </span>
            </div> 
        </div>
    )
}
