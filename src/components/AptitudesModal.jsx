import clsx from 'clsx'
import {AptitudeItem} from './AptitudeItem.jsx'
import {aptitudesHero, aptitudesAboutMe} from '../constants/aptitudesItems.js'

const aptitudeByCategory = {
    hero:aptitudesHero,
    aboutme: aptitudesAboutMe,
}

const aptitudeClass = {
    hero: clsx('pt-5 pb-6 lg:px-4 lg:py-6 mt-6',
        'border-b border-t border-colorSutilBoard lg:rounded-2xl lg:border',
        'flex flex-row gap-2 justify-evenly lg:gap-5'
    ),

    aboutme: clsx('mt-4.5 lg:px-4',
        'flex flex-row gap-10'
    )

}

export function AptitudesModal({aptitudesCategory}) {
    const aptitudeString = aptitudesCategory.toLowerCase();
    const aptitudeItem = aptitudeByCategory[aptitudeString] ?? [];

    const aptitudeClassString = aptitudesCategory.toLowerCase();
    const aptitudeClassName = aptitudeClass[aptitudeClassString] ?? '';
    
    return(
        <article className={aptitudeClassName}>
            {
                aptitudeItem.map((aptitude)=>{
                    return(
                        <AptitudeItem 
                        key={aptitude.id} Icon={aptitude.Icon} 
                        aptitude={aptitude.aptitude} description={aptitude.description}
                        flexDirection={aptitude.flexDirection}
                        />
                    );
                })
            }
        </article>
    )
}