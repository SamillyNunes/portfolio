import { useEffect } from "react";

export default function HomePage(){
    function adjustTextWidth(){
        const sourceDiv = document.getElementById('source');
        const sourceDivWidth = sourceDiv?.offsetWidth;

        const targetDiv = document.getElementById('target');
        if(targetDiv!=null){
            targetDiv.style.width = `${sourceDivWidth}px`;

        }
    }

    useEffect(()=>{
        adjustTextWidth();
    }, []);

    return (
        <div className="
            flex flex-col lg:flex-row items-center justify-center
            text-white 
            h-screen md:h-[calc(100vh*0.85)] 
        ">
                <div className="
                    md:w-[100%] lg:w-[50%] md:h-min lg:h-[80%] 
                    md:my-10
                    flex flex-col justify-center 
                    pl-10 lg:pl-20 
                ">
                    <div>
                        <h1 id="source" className="text-2xl lg:text-5xl w-min font-black tracking-widest">DESENVOLVEDORA</h1>
                        <div id="target" className="flex flex-row justify-between">
                            <hr className="bg-white w-14 h-1 mt-2" />
                            <h1 className="text-2xl lg:text-5xl font-black">DE SOFTWARE</h1>

                        </div>
                    </div>
                    <h3 className="text-lg md:text-xl w-[90%] my-10">
                        Seja bem-vindo ao meu portfólio! Aqui você encontrará informações sobre minhas competências, projetos e muito mais.
                    </h3>
                    <h3 className="text-xl">
                        Conheça mais ⬇
                    </h3>
                </div>
                <div className="
                    md:w-[50%] lg:w-[50%] md:h-min lg:h-[80%] 
                    mt-10 md:mt-0
                    flex flex-col md:items-end lg:items-center lg:justify-center
                " >
                    <div className="flex flex-col items-center ">
                        <img src="/images/photo.png" className="w-[50%]" alt="Foto de Samilly Nunes" />
                        <div className="bg-white w-[60%] h-10 justify-center items-center flex text-black hover:bg-primary-purple hover:text-white">
                            <h1 className=" font-black text-xl ">
                                SAMILLY NUNES
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
    );
}