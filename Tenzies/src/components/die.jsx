export default function Die(props){
    
    const styles ={
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <>
        <button  onClick={props.fun} style={styles}
        aria-pressed={props.isHeld}
        aria-label={
            `Die showing ${props.value} and is ${props.isHeld ? "held" : "not held"}`
        }
        >{props.value}</button>
        </>
    )
}