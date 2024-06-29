import { useEffect, useState } from "react";

interface XpLineInfo{
    year: string;
    title: string;
    subtitle: string;
    description: string;
    isEducation?: boolean;
}


export default function XpLineInfo(props: XpLineInfo){

    const isEducation = props.isEducation ?? false;
    
    const idS1 = `s1${props.title}`;
    const idS2 = `s2${props.title}`;
    const idS3 = `s3${props.title}`;
    const targetId = `target${props.title}`;

    const [lineHeight, setLineHeight] = useState(100);

    function adjustTextHeigth(){
        const sourceDiv1 = document.getElementById(idS1);
        const sourceDiv1Height = sourceDiv1?.offsetHeight;
        const sourceDiv2 = document.getElementById(idS2);
        const sourceDiv2Height = sourceDiv2?.offsetHeight;
        const sourceDiv3 = document.getElementById(idS3);
        const sourceDiv3Height = sourceDiv3?.offsetHeight;

        if(sourceDiv1Height && sourceDiv2Height && sourceDiv3Height){
            const heightsSum =  sourceDiv1Height + sourceDiv2Height + sourceDiv3Height;

            // alert(heightsSum);

            const targetDiv = document.getElementById(targetId);
            if(targetDiv!=null){
                // targetDiv.style.height = `${heightsSum}px`;
                // alert(heightsSum.toString()+'px');
                setLineHeight(heightsSum);
                console.log(`line height: ${heightsSum}`)
            }
        }
    }

    useEffect(()=>{
        adjustTextHeigth();
    }, []);

    window.addEventListener('resize', adjustTextHeigth);

    return (
        <div className="flex flex-row mt-2 items-start">
            <div className="w-[10%] flex justify-end">
                <h3 className={`
                    text-base md:text-lg font-bold   
                    ${isEducation ? 'text-light-purple' : ''}   
                `}>
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

                <div id={targetId} 
                    style={{height: lineHeight}}
                    className={`
                        w-0.5 
                        bg-white    
                `}>

                </div>
            </div>
            <div className="flex flex-col justify-start w-[80%]">
                <h3 id={idS1} className={`
                    text-base md:text-xl font-bold 
                    ${isEducation ? 'text-light-purple' : ''}    
                `}>
                    {/* Analista de Desenvolvimento de Produto I */}
                    {props.title}
                </h3>
                <h3 id={idS2} className="text-base md:text-xl">
                    {props.subtitle}
                </h3>
                <h5 id={idS3} className="text-sm md:text-base mt-5">
                    {props.description}
                </h5>
            </div>
        </div>
    );
}