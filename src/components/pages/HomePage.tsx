import { useEffect } from "react";
import Layout from "../Layout";

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
        <Layout>
            <div className="flex flex-row text-white h-full items-center">
                <div className="w-[50%] flex flex-col h-[80%] justify-center pl-32">
                    <div>
                        <h1 id="source" className="text-4xl w-min font-black tracking-widest">DESENVOLVEDORA</h1>
                        <div id="target" className="flex flex-row justify-between">
                            <hr className="bg-white w-14 h-1 mt-2" />
                            <h1 className="text-4xl font-black">DE SOFTWARE</h1>

                        </div>
                    </div>
                    <h3 className="text-lg w-[70%] my-10">
                        Seja bem-vindo ao meu portfólio! Aqui você encontrará informações sobre minhas competências, projetos e muito mais.
                    </h3>
                    <h3 className="text-lg">
                        Conheça mais ⬇
                    </h3>
                </div>
                <div className="w-[50%] flex flex-col  h-[80%] justify-center items-center" >
                    <img src="/images/photo.png" className="w-[50%]" />
                    <div className="bg-white w-[60%] h-10 justify-center items-center flex text-black hover:bg-primary-purple hover:text-white">
                        <h1 className=" font-black text-xl ">
                            SAMILLY NUNES
                        </h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
}