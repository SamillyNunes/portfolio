interface XpLineInfo{
    year: string;
    title: string;
    subtitle: string;
    description: string;
}

export default function XpLineInfo(props: XpLineInfo){
    return (
        <div className="flex flex-row mt-2">
            <div className="w-[10%] flex justify-end">
                <h3 className="text-lg font-bold ">
                    {/* 2024 */}
                    {props.year}
                </h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="
                    bg-primary-purple
                    mx-5 mb-2
                    w-6 h-6
                    rounded-full
                "></div>

                <div className="
                    w-0.5 h-32 
                    bg-white
                ">

                </div>
            </div>
            <div className="flex flex-col justify-start">
                <h3 className="text-xl font-bold">
                    {/* Analista de Desenvolvimento de Produto I */}
                    {props.title}
                </h3>
                <h3 className="text-xl">
                    {props.subtitle}
                </h3>
                <h5 className="text-base mt-5">
                    {props.description}
                </h5>
            </div>
        </div>
    );
}