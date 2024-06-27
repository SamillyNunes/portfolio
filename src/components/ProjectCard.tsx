import { useEffect, useState } from "react";

interface ProjectCardProps{
    title: string;
    description: string;
    link: string;
    photos: string[];
}


export default function ProjectCard(props: ProjectCardProps){
    const [currentIndex, setCurrentIndex] = useState(0); 

    useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrentIndex((previousIndex) => (previousIndex+1)%props.photos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="
            relative 
            w-64 h-56 overflow-hidden
            cursor-pointer
        ">
            {props.photos.map((photo, index)=> (
                <div 
                    key={index}
                    className={`
                        absolute w-full h-full
                        transition-opacity duration-1000
                        ${index===currentIndex ? 'opacity-100' : 'opacity-0'} 
                        hover:bg-dark-gray   
                        
                    `}
                >
                    <img src={photo} className="w-full h-full object-cover " />
                    

                </div>
            ))}
            {/* <div className="
                w-full h-full bg-dark-gray
            "></div> */}

        </div>
    );
}