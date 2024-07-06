import route from "next/router";
import {Link} from "react-scroll";

interface HeaderButtonProps{
    label: string;
    to: string;
    redirectToHomeFirst?: boolean;
}

export default function HeaderButton(props: HeaderButtonProps){

    const redirectToHomeFirst = props.redirectToHomeFirst ?? false;

    function onClick(){
        if(redirectToHomeFirst){
            route.push('/');
        }
    }

    return (
        <Link
            onClick={ onClick }
            to={props.to}
            smooth
            duration={500}
        >
            <div 
                className="text-white md:text-lg lg:text-xl h-min cursor-pointer group "
            >
                {props.label}
                <hr className="opacity-0 group-hover:opacity-100 border-primary-purple duration-75 ease-out" />
            </div>
        </Link>
    );
}   