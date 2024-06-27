import { useEffect, useState } from "react";

interface ProjectCardProps{
    title: string;
    description: string;
    link: string;
    photos: string[];
}


export default function ProjectCard(props: ProjectCardProps){
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isHovering, setIsHovering] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrentIndex((previousIndex) => (previousIndex+1)%props.photos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            onMouseDown={()=>window.open(props.link)} 
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
            className="
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
                        ${(index===currentIndex) ? 'opacity-100' : 'opacity-0'} 
                        
                    `}
                >
                    <img src={photo} className="w-full h-full object-cover" alt={`Slide ${index}`} />                   

                </div>
            ))}
            <div className={`
                w-full h-full 
                bg-dark-gray
                text-white
                flex flex-col justify-center items-center
                absolute
                transition-opacity duration-300
                ${isHovering ? 'opacity-90' : 'opacity-0'}
            `}>
                <h2 className="font-bold text-lg"> {props.title} </h2>
                <h4 className="text-center"> {props.description} </h4>
                
                <button 
                    onClick={()=> window.open(props.link)}
                    className="
                    bg-primary-purple
                    rounded-md
                    w-32 h-7
                    mt-5
                ">
                    Conheça já
                </button>
            </div>

        </div>
    );
}