import AwardInfo from "../AwardInfo";
import Title from "../Title";

export default function AwardsPage(){
    return (
        <div className="h-min p-10">
            <Title label="PREMIAÇÕES" />

            <AwardInfo
                title="Prêmio de Excelência Acadêmica"
                imgUrl="images/awards/laccan.webp"
                description="Premiação reconhecida pelo trabalho no projeto de inovação e tecnologia (PIBITI) desenvolvido no Laboratório
                    de Computação Científica e Análise Númerica (LaCCAN).
                    Plano de projeto reconhecido: Identificação de atributos para regras de tributação a partir do processamento
                    do texto das leis tributárias."
            />

            <AwardInfo
                title="Menção honrosa"
                imgUrl=""
                description=""
            />

        </div>
    );
}