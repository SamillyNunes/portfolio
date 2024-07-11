interface TitleProps{
    label: string;
    hasLineUnder?: boolean;
    isSmaller?: boolean;
}

export default function Title(props: TitleProps){
    const hasLine = props.hasLineUnder ?? true;
    const isSmaller = props.isSmaller ?? false;

    return (
        <div className="flex flex-col">
            <h1 className={`
                ${isSmaller ? 'text-xl lg:text-3xl' : 'text-3xl lg:text-4xl'}
                text-white font-black    
            `}>
                {props.label}
            </h1>
            {hasLine && <hr className="bg-white w-14 h-1 mt-2"/>}
        </div>
    );
}