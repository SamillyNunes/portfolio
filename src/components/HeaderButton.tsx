interface HeaderButtonProps{
    label: string;
}

export default function HeaderButton(props: HeaderButtonProps){
    return (
        <div className="text-white md:text-lg lg:text-xl h-min cursor-pointer group ">
            {props.label}
            <hr className="opacity-0 group-hover:opacity-100 border-primary-purple duration-75 ease-out" />
        </div>
    );
}   