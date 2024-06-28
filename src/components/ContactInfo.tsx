interface ContactInfo{
    label: string;
    iconUrl: string;
    onClick: () => void;
}

export default function ContactInfo(props: ContactInfo){
    return (
        <div 
            onClick={props.onClick}
            className="
                w-[90%] h-14 p-5 
                bg-dark-gray hover:bg-white hover:text-dark-gray
                flex flex-row items-center
                transition-all duration-500
                cursor-pointer
        ">
            <img src={props.iconUrl} className="w-7 object-contain" />
            <h1 className="text-xs md:text-lg ml-3 truncate text-ellipsis">
                {props.label}
            </h1>
        </div>
    );
}