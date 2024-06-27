import ProjectCard from "../ProjectCard";
import Title from "../Title";

export default function ProjectsPage(){

    const projects = [
        {
            title: "Service Tickets",
            description: "Sistema de abertura de chamados",
            link: "https://github.com/SamillyNunes/tickets-service",
            photos: [
                "/images/projects/tickets/dashboard.png",
                "/images/projects/tickets/login.png",
                "/images/projects/tickets/novo-chamado.png",
            ],
        }
    ];

    return (
        <div className="h-min p-10">
            <Title label="PROJETOS" />
            <div className="mt-10">
                {projects.map((p, i) => (
                    <ProjectCard
                        title={p.title}
                        description= {p.description}
                        link={p.link}
                        photos={p.photos}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
}