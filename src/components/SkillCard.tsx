import { useState } from "react";
import { FilledStarIcon, OutlineStarIcon } from "./Icons";

interface SkillCardProps{
    label: string;
    imageUrl: string;
    skillRank: number;
}

export default function SkillCard(props: SkillCardProps){
    const [isHovering, setIsHovering] = useState(false);

    function getStarsRanking(): JSX.Element[]{
        const stars = [];

        for(var i=0; i<props.skillRank; i++){
            stars.push(FilledStarIcon());
        }

        if(stars.length<5){
            for(var i=(stars.length); i<5; i++){
                stars.push(OutlineStarIcon())
            }
        }

        return stars;
    }

    return (
        <div
            onMouseEnter={()=>setIsHovering(true)} 
            onMouseLeave={()=>setIsHovering(false)}
            className="
                w-24 h-24 md:w-36 md:h-36 p-5 
                bg-dark-purple 
                flex flex-col justify-center items-center
                rounded-lg
                relative
        ">
            <div className="h-[80%]">
                <img src={props.imageUrl} className="h-full" alt={`Imagem referente a ${props.label}`} />
            </div>
            <h3 className="text-lg mt-2">
                {props.label}
            </h3>

            <div className={`
                ${isHovering ? 'opacity-80' : 'opacity-0'} 
                transition-all
                duration-300
                absolute
                w-full h-full   
                p-5
                rounded-lg
                bg-dark-purple 
                flex flex-col justify-center items-center
            `}>
                <div>
                    Habilidade:
                </div>
                <div className="flex flex-row">
                    {getStarsRanking().map(star => (star))}
                </div>
            </div>

            
        </div>
    );
}