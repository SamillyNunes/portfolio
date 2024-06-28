interface SkillCardProps{
    label: string;
    imageUrl: string;
}

export default function SkillCard(props: SkillCardProps){
    return (
        <div className="
            w-24 h-24 md:w-36 md:h-36 p-5 
            bg-dark-purple 
            flex flex-col justify-center items-center
            rounded-lg
        ">
            <div className="h-[80%]">
                <img src={props.imageUrl} className="h-full" alt={`Imagem referente a ${props.label}`} />
            </div>
            <h3 className="text-lg mt-2">
                {props.label}
            </h3>
        </div>
    );
}