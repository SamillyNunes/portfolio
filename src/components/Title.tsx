interface TitleProps{
    label: string;
}

export default function Title(props: TitleProps){
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-4xl text-white font-black">
                {props.label}
            </h1>
            <hr className="bg-white w-14 h-1 mt-2"/>
        </div>
    );
}