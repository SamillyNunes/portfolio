import { useEffect } from "react";
import Title from "../Title";
import XpLineInfo from "../XpLineInfo";

export default function XpPage(){
    

    return (
        <div className="h-min bg-dark-gray p-10">
            <Title label="EXPERIÊNCIA" />
            <div className="flex flex-col mt-10 ">
                <XpLineInfo
                    year="2024"
                    title="Analista de Desenvolvimento de Produto I"
                    subtitle="Intelbras, Remoto"
                    description="Desenvolvedora de software focada no desenvolvimento mobile utilizando Flutter como principal ferramenta. Responsável pelo principal aplicativo do segmento, implementação e manutenção de funcionalidades, estudo de novas abordagens, participação de sprints, testes e CI/CD."
                />
                <XpLineInfo
                    year="2022"
                    title="Bacharelado em Ciência da Computação"
                    subtitle="UFAL, Arapiraca"
                    isEducation
                    description="Conclusão do curso. Para além do curso, houve a participação de um projeto de desenvolvimento de Jogos para crianças autistas com Unity3D e C# (SIA); Bolsa de iniciação científica para o desenvolvimento de um sistema auxiliar para ajudar no ensino de Redes de Computadores; Bolsa de iniciação tecnológica para o desenvolvimento de um sistema inteligente para minerar e categorizar produtos de lojas do estado e auxiliar no preenchimento de NFes, no LaCCAN. Apresentação de artigos em conferência regional por dois anos (ERBASE). Prêmio de excelência acadêmica."
                />
                <XpLineInfo
                    year="2021"
                    title="Desenvolvimento Backend"
                    subtitle="Weni, Remoto, Estágio"
                    description="Participação no time de Inteligência Artificial como estagiária de desenvolvimento backend utilizando Python e Django. Participação de reuniões diárias e estudos da área."
                />
                <XpLineInfo
                    year="2020"
                    title="Desenvolvimento Flutter"
                    subtitle="Vanq, Remoto, Freelancer"
                    description="Criação e desenvolvimento de um aplicativo no ramo financeiro para a startup Vanq. Desenvolvimento de funcionalidades e interfaces, vínculo com API externa e notificações push; participação de reuniões."
                />
                <XpLineInfo
                    year="2018"
                    title="Técnico em Informática"
                    isEducation
                    subtitle="IFAL, Palmeira dos Índios"
                    description="Conclusão do ensino médio e técnico pelo Instituto Federal de Alagoas (2014-2018). Incluiu apresentação de artigo em conferência rgional; Participação de projeto de extensão focado no ensino de programação para alunos do ensino médio da rede estadual."
                />
                
            </div>
        </div>
    );
}