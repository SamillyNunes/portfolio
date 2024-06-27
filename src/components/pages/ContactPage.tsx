import ContactInfo from "../ContactInfo";
import Title from "../Title";

export default function ContactPage(){
    return (
        <div className="flex flex-col h-min w-full p-10 ">
            <div className="flex flex-row justify-center items-center">
                <Title label="CONTATO" hasLineUnder={false} />
                <hr className="h-1 w-full bg-white ml-5" />
            </div>
            <div className="grid grid-cols-2 w-full mt-5 justify-items-center gap-4">
                <ContactInfo
                    label="samillynunes19@gmail.com"
                    iconUrl="/images/icons/email.png"
                    onClick={()=> window.open('mailto:samillynunes19@gmail.com')}
                />
                
                <ContactInfo
                    label="https://github.com/SamillyNunes"
                    iconUrl="/images/icons/github.png"
                    onClick={()=> window.open('https://github.com/SamillyNunes')}
                />
                
                <ContactInfo
                    label="https://www.linkedin.com/in/samillynunes19/"
                    iconUrl="/images/icons/linkedin.png"
                    onClick={()=> window.open('https://www.linkedin.com/in/samillynunes19/')}
                />
            </div>
            <hr className="h-1 w-full bg-white mt-10" />

        </div>
    );
}