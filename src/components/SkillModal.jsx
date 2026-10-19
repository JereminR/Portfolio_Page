
export function SkillModal({Icon, skill}) {
    return(
        <div className='
        text-colorTextTerciary
        bg-colorSurfaceCard
        py-3
        border border-colorSutilBoard rounded-xl
        flex flex-col gap-2
        '>
            <div className='
            flex justify-center
            '>
                <Icon size={20} aria-hidden='true'/>
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
