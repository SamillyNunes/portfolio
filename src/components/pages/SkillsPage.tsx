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
                    skillRank={5}
                />
                <SkillCard
                    label="Python"
                    imageUrl="/images/skills/python.png"
                    skillRank={5}
                />
                <SkillCard
                    label="Javascript"
                    imageUrl="/images/skills/javascript.png"
                    skillRank={4}
                />
                <SkillCard
                    label="Typescript"
                    imageUrl="/images/skills/typescript.png"
                    skillRank={5}
                />
                <SkillCard
                    label="React"
                    imageUrl="/images/skills/react.png"
                    skillRank={4}
                />
                <SkillCard
                    label="NextJs"
                    imageUrl="/images/skills/nextjs.png"
                    skillRank={4}
                />
                <SkillCard
                    label="TalwindCss"
                    imageUrl="/images/skills/tailwindcss.png"
                    skillRank={5}
                />
                <SkillCard
                    label="HTML"
                    imageUrl="/images/skills/html.png"
                    skillRank={5}
                />
                <SkillCard
                    label="CSS"
                    imageUrl="/images/skills/css.png"
                    skillRank={4}
                />
                <SkillCard
                    label="Github"
                    imageUrl="/images/skills/github.png"
                    skillRank={5}
                />
                <SkillCard
                    label="Django"
                    imageUrl="/images/skills/django.png"
                    skillRank={4}
                />
                <SkillCard
                    label="Firebase"
                    imageUrl="/images/skills/firebase.png"
                    skillRank={4}
                />
                <SkillCard
                    label="Docker"
                    imageUrl="/images/skills/docker.png"
                    skillRank={3}
                />
                <SkillCard
                    label="Java"
                    imageUrl="/images/skills/java.png"
                    skillRank={3}
                />
                <SkillCard
                    label="C#"
                    imageUrl="/images/skills/csharp.png"
                    skillRank={3}
                />
                <SkillCard
                    label="Unity3D"
                    imageUrl="/images/skills/unity3d.png"
                    skillRank={3}
                />
                <SkillCard
                    label="MySQL"
                    imageUrl="/images/skills/mysql.png"
                    skillRank={3}
                />
                <SkillCard
                    label="MongoDB"
                    imageUrl="/images/skills/mongodb.png"
                    skillRank={3}
                />
            </div>
        </div>
    );
}