

export function AptitudesModal({Icon, aptitude}) {
    
    return(
        <div className='
        text-colorTextPrimary
        max-w-25
        flex flex-col items-center gap-1
        lg:max-w-none lg:flex-1 lg:flex-row lg:gap-3
        '>
            <div className='
            bg-colorElevatedCard
            min-w-13 h-10
            border border-colorSutilBoard rounded-2xl
            flex  items-center justify-center
            lg:min-w-11
            '> <Icon size={20} strokeWidth={1.8} aria-hidden='true'
            className='text-colorBrightnessPurple'/> </div>

            <span className='
                text-xs text-center
                font-medium
                lg:text-left
                '> {aptitude} 
            </span>
        </div>
    )
}
