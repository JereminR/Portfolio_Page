
export function SkillModal({Icon, skill, color}) {
    
    return(
        <div className='
        text-center
        bg-colorSurfaceCard
        
        py-3
        border border-colorSutilBoard rounded-xl
        flex flex-col gap-2
        '>
            <div className='
            flex justify-center
            '>
                <Icon size={20} color= {`var(--${color})`} aria-hidden='true'/>
                
            </div>

            <span className='
            text-colorTextTerciary text-xs
            flex justify-center
            '>
                {skill}
            </span>
        </div>
    )
}
