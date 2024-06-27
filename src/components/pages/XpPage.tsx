import Title from "../Title";
import XpLineInfo from "../XpLineInfo";

export default function XpPage(){
    return (
        <div className="h-screen bg-dark-gray px-20 py-10">
            <Title label="EXPERIÊNCIA" />
            <div className="flex flex-col mt-10">
                <XpLineInfo
                    year="2024"
                    title="Analista de Desenvolvimento de Produto I"
                    subtitle="Intelbras, Remoto"
                    description="Desenvolvedora de software focada no desenvolvimento mobile utilizando Flutter como principal ferramenta. Responsável pelo principal aplicativo do segmento, implementação e manutenção de funcionalidades, estudo de novas abordagens, participação de sprints, testes e CI/CD."
                />
                <XpLineInfo
                    year="2021"
                    title="Desenvolvimento Backend"
                    subtitle="Weni, Remoto, Estágio"
                    description="Desenvolvedora de software focada no desenvolvimento mobile utilizando Flutter como principal ferramenta. Responsável pelo principal aplicativo do segmento, implementação e manutenção de funcionalidades, estudo de novas abordagens, participação de sprints, testes e CI/CD."
                />
                
            </div>
        </div>
    );
}