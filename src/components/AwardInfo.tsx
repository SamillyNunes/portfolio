interface AwardInfoProps{
    title: string;
    description: string;
    imgUrl: string;
}

export default function AwardInfo(props: AwardInfoProps){
    return (
        <div className="mt-5 flex">
            <div className="w-[20%] mr-10">
                {/* <img src="/images/awards/laccan.webp" /> */}
                <img src={props.imgUrl} alt={props.title} />
            </div>
            <div>
                <h1 className="font-bold text-lg">
                    {/* Prêmio de Excelência Acadêmica */}
                    {props.title}
                </h1>

                <h2 className="mt-2">
                    {props.description}
                </h2>
            </div>
        </div>
    );
}