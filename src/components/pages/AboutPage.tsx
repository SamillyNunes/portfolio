import AnimatedDiv from "../AnimatedDiv";
import Title from "../Title";

export default function AboutPage(){
    return (
        <div id="about" className="px-10 mt-10">
            <Title label="SOBRE MIM"/>
            <AnimatedDiv>
                <h3 className="text-lg text-white mt-5 mb-20"> 
                    Graduada em Ciência da Computação pela Universidade Federal de Alagoas, técnica em informática pelo Instituto Federal de Alagoas. Apaixonada pela tecnologia e movida pela vontade de impactar pessoas atráves dela. Desenvolvedora de software há mais de 4 anos, proativa e dedicada.
                </h3>
            </AnimatedDiv>
        </div>
    );
}