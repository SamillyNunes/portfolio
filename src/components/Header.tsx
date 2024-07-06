import Link from "next/link";
import HeaderButton from "./HeaderButton";

interface HeaderProps{
    redirectToHomeFirst?: boolean;
}

export default function Header(props: HeaderProps){

    const redirectToHomeFirst = props.redirectToHomeFirst ?? false;

    return (
        <div className="hidden md:flex flex-row w-full justify-between calc h-[calc(100vh*0.15)] items-center" >
            <div className="my-5 ml-10 h-full md:h-[40%] lg:h-[80%]">
                <Link href="/">
                    <img src="/images/logo.png" className="h-full" alt="Logo do site escrito SamyDev" />
                </Link>
            </div>
            <div className="flex flex-row space-x-4 w-[60%] items-center justify-around md:mr-5">
                <HeaderButton
                    label="SOBRE MIM"
                    to="about"
                    redirectToHomeFirst
                />
                <HeaderButton
                    label="COMPETÊNCIAS"
                    to="skills"
                />
                <HeaderButton
                    label="PROJETOS"
                    to="projects"
                />
                <HeaderButton
                    label="CONTATO"
                    to="contact"
                />
            </div>
        </div>
    );
}