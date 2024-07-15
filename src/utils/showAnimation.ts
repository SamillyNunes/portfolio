export default function getShowAnimation(){
    return ({
    offscreen: {
        y: 150,
        opacity: 0,
    },
    onscreen: () =>  ({
        y: 0,
        opacity: 1,
        transition: {
        type: "spring",
        duration: 2,
        }
    })
    });
}