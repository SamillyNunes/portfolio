import SkillCard from "../SkillCard";
import Title from "../Title";

export default function SkillsPage(){
    return (
        <div id="skills" className="h-min p-10">
            <Title label="COMPETÊNCIAS" />
            <div className="
                mt-10 
                grid grid-cols-3 lg:grid-cols-5 gap-4 md:grid-cols-4 xl:grid-cols-6
                justify-center justify-items-center
            ">
                <SkillCard
                    label="Flutter"
                    imageUrl="/images/skills/flutter.png"
                />
                <SkillCard
                    label="Python"
                    imageUrl="/images/skills/python.png"
                />
                <SkillCard
                    label="Javascript"
                    imageUrl="/images/skills/javascript.png"
                />
                <SkillCard
                    label="Typescript"
                    imageUrl="/images/skills/typescript.png"
                />
                <SkillCard
                    label="React"
                    imageUrl="/images/skills/react.png"
                />
                <SkillCard
                    label="NextJs"
                    imageUrl="/images/skills/nextjs.png"
                />
                <SkillCard
                    label="TalwindCss"
                    imageUrl="/images/skills/tailwindcss.png"
                />
                <SkillCard
                    label="HTML"
                    imageUrl="/images/skills/html.png"
                />
                <SkillCard
                    label="Github"
                    imageUrl="/images/skills/github.png"
                />
                <SkillCard
                    label="Django"
                    imageUrl="/images/skills/django.png"
                />
                <SkillCard
                    label="Firebase"
                    imageUrl="/images/skills/firebase.png"
                />
            </div>
        </div>
    );
}