import Die from "./components/die.jsx";
import { useState } from "react";
export default function Main() {
 
    const [dice, setDice] = useState(generateAllNewDice());













    

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
             <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {diceElements}
            </div>
            
            <button className="roll-dice" onClick={rollDice}>
            Roll Dice</button>
        </main>

        
            
        </>
    )
}