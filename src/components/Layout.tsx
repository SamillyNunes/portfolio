export default function Layout(props: any){
    return (
        <div className="h-[calc(100vh*0.85)]">
            {props.children}
        </div>
    );
}