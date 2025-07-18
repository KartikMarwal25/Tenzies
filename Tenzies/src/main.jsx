import Die from "./components/die.jsx";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";
export default function Main() {
 
    const [dice, setDice] = useState(()=>generateAllNewDice());
    const buttonRef = useRef(null);



    const gameWon =(dice.every(die => die.isHeld && die.value === dice[0].value)) 
        
       
    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus();
        }
    }, [gameWon]);

    function holdDice(id) {
        setDice(oldDice => oldDice.map((die, index) => 
            index === id ? {...die, isHeld: !die.isHeld} : die
        ))

    }


    function generateAllNewDice() {
        return new Array(10).fill(0).map(() =>({value: Math.ceil(Math.random() * 6),
            isHeld: false
        }));
    }
    
    function rollDice() {
        setDice(oldDice => oldDice.map(die => 
            die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
        ));

    }

 const diceElements =dice.map((arr,index)=>{
    return (<Die value={arr.value} key={index} isHeld={arr.isHeld} fun={()=>{holdDice(index)}}/>)
 })

    return (
        <>
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p >Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
             <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {diceElements}
            </div>
            
            <button ref={buttonRef} className="roll-dice" onClick={!gameWon?rollDice: ()=>{setDice(generateAllNewDice())}}>
            {!gameWon?"Roll Dice":"New Game"}</button>
        </main>

        
            
        </>
    )
}