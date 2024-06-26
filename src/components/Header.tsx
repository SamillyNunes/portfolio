import HeaderButton from "./HeaderButton";

export default function Header(){
    return (
        <div className="flex flex-row w-full justify-between" >
            <div className="w-52 my-5 ml-10">
                <img src="/images/logo.png" />
            </div>
            <div className="flex flex-row space-x-4 w-[60%] items-center justify-around">
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