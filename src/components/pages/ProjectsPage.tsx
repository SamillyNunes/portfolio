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
        },
        {
            title: "Dashboard Admin",
            description: "Dashboard de administração de algum serviço",
            link: "https://github.com/SamillyNunes/dashboard_admin",
            photos: [
                "/images/projects/dashboard_admin/auth-mobile.png",
                "/images/projects/dashboard_admin/auth-pc.png",
                "/images/projects/dashboard_admin/dash-dark.png",
            ],
        },
        {
            title: "Next CRUD",
            description: "Sistema de cadastro, edição, consulta e remoção simples.",
            link: "https://github.com/SamillyNunes/next-crud",
            photos: [
                "/images/projects/next-crud/editar.png",
                "/images/projects/next-crud/home.png",
                "/images/projects/next-crud/novo.png",
            ],
        },
        {
            title: "Quizz",
            description: "Quiz de perguntas previamente cadastradas na API criada dentro do mesmo projeto.",
            link: "https://github.com/SamillyNunes/quizz",
            photos: [
                "/images/projects/quizz/quiz.jpg",
                "/images/projects/quizz/results.jpg",
            ],
        },
    ];

    return (
        <div className="h-min p-10">
            <Title label="PROJETOS" />
            <div className="
                mt-10 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 
                justify-center justify-items-center
            ">
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