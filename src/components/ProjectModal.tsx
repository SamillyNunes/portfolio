import { ProjectModel } from "@/models/ProjectModel";
import { ExitIcon } from "./Icons";
import Title from "./Title";
import Link from "next/link";

interface ProjectModalProps {
    project: ProjectModel
    onCloseModal: () => void
}

export default function ProjectModal(props: ProjectModalProps) {
    return (

        <div className="
            w-full h-full
            flex justify-center items-center
            fixed left-0 top-0
        ">
            <div
                onClick={props.onCloseModal}
                className="
                    w-full h-full
                    bg-black opacity-50
            ">

            </div>
            <div className="
                bg-light-purple
                absolute
                h-[80%] w-[80%]
                flex flex-col
            ">
                <div className="
                    h-[50%]
                    bg-black
                ">
                    <div className="w-full h-full relative">
                        <img
                            src={props.project.photos[0]}
                            alt={`Projeto ${props.project.title}`}
                            className="w-full h-full object-cover opacity-50 "
                        />
                    </div>

                    <div className="
                        flex flex-col
                        absolute inset-0
                        h-[50%] p-10
                    ">
                        {/* <h1 className="text-3xl font-bold">
                            Projeto Quizz
                        </h1> */}
                        <div className="flex justify-between  items-start">
                            <Title label={`Projeto ${props.project.title}`} isSmaller />

                            <button onClick={props.onCloseModal} className="hover:scale-125 hover:text-red-300 duration-300 ml-5">
                                {ExitIcon(7)}
                            </button>
                        </div>

                        <h2 className="mt-5">
                            {props.project.description}
                        </h2>

                        <Link href={props.project.link} target="_blank" className="absolute bottom-5 hover:scale-110 duration-300">
                            <div className="flex items-center justify-center">
                                <img src="/images/icons/github.png" alt="Ícone do Github" className="h-5 mr-2" />
                                <h1>
                                    Ver no Github
                                </h1>
                            </div>
                        </Link>

                    </div>
                </div> {/* Div da foto */}

                <div className="px-10 py-5 overflow-auto">
                    <div className="flex">
                        <h1 className="mr-2 font-bold">Linguagem utilizada: </h1>
                        <h1> {props.project.language} </h1>
                    </div>

                    {props.project.framework && <div className="flex mt-3">
                        <h1 className="mr-2 font-bold">Framework: </h1>
                        <h1> {props.project.framework} </h1>
                    </div>}

                    {props.project.featuresDescription && <div className=" mt-3">
                        <h1 className="mr-2 mb-2 font-bold">Funcionalidades: </h1>
                        <ul>
                            {props.project.featuresDescription.map(f => (
                                <li className="list-disc ml-10"> {f} </li>
                            ))}
                        </ul>
                    </div>}
                </div> {/*  */}


            </div>
        </div>
    );
}