import HeaderButton from "./HeaderButton";

export default function Header(){
    return (
        <div className="hidden md:flex flex-row w-full justify-between calc h-[calc(100vh*0.15)] items-center" >
            <div className="my-5 ml-10 h-full md:h-[40%] lg:h-[80%]">
                <img src="/images/logo.png" className="h-full" alt="Logo do site escrito SamyDev" />
            </div>
            <div className="flex flex-row space-x-4 w-[60%] items-center justify-around md:mr-5">
                <HeaderButton
                    label="SOBRE MIM"
                />
                <HeaderButton
                    label="COMPETÊNCIAS"
                />
                <HeaderButton
                    label="PROJETOS"
                />
                <HeaderButton
                    label="CONTATO"
                />
            </div>
        </div>
    );
}