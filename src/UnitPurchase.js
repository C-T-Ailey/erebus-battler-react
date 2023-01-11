import React, { useEffect, useState } from 'react'
import "./UnitPurchase.css"

export default function UnitPurchase(props) {

    const [lightCount, setLightCount] = useState(Object.keys(props.lightUnits).length)

    const [mediumCount, setMediumCount] = useState(Object.keys(props.medUnits).length)

    const [heavyCount, setHeavyCount] = useState(Object.keys(props.heavyUnits).length)

    const [lightModifierIsAdded, setLightModifierIsAdded] = useState(false)

    const [medModifierIsAdded, setMedModifierIsAdded] = useState(false)

    const [heavyModifierIsAdded, setHeavyModifierIsAdded] = useState(false)

    const [deathdregUnlocked, setDeathdregUnlocked] = useState(false)

    class Troop {
        constructor(faction, weight, type, attack, defense, agility, modifier) {
            this.faction = faction;
            this.weight = weight;
            this.type = type;
            this.attack = attack;
            this.defense = defense;
            this.agility = agility;
            this.modifier = modifier;
        }
        special() {
            let specialArr = ["", "Frenzied", "Stoic", "Ruthless", "Keen", "Decrepit", "Incandescent", "Caustic", "Opportunistic", "Swift"];
            return specialArr[this.modifier];
        }

        modifierDescription() {
            let modifiers = {
                "Frenzied": "Frenzied units have a chance to perform an additional attack with significantly reduced accuracy.", 
                "Stoic": "Stoic units are immune to Stress effects, and have a chance to reduce damage from Opportunity attacks.", 
                "Ruthless": "Ruthless units deal increased damage, but at the cost of reduced evasion chance.", 
                "Keen": "Keen units deal additional damage with critical hits.", 
                "Decrepit": "Decrepit units have reduced HP, but have a chance to be defended from attacks by a neighboring unit.", 
                "Incandescent": "Incandescent units may cause enemies to receive minor damage after attacking.", 
                "Caustic": "Enemies will temporarily be unable to recover HP or ignore KO when damaged by Caustic units.", 
                "Opportunistic": "Opportunistic units have a chance to counter-attack when an attacker stumbles or is parried.", 
                "Swift": "Swift units will receive attack priority in battles.", 
            }
            return modifiers[this.special()]
        }

    }

    let troopPetrov = new Troop("Tyranny","light","Petrov Unit",3,2,5,0)

    let troopLegion = new Troop("Necropolitan", "light","Legionnaire",3,2,5,0)
    
    useEffect(() => {
        console.log(lightModifierIsAdded, medModifierIsAdded, heavyModifierIsAdded)
    }, [lightModifierIsAdded, medModifierIsAdded, heavyModifierIsAdded])

    useEffect(() => {
        console.log(lightCount, props.lightUnits)
        console.log(mediumCount)
        console.log(heavyCount)
    }, [lightCount, props.lightUnits, mediumCount, props.medUnits, heavyCount, props.heavyUnits])

    const getModifier = (min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min) + min);
    }

    const troops = (e) => {
        if(e.target.className === "buyLight" && props.points>=100){
            // setLightCount(lightCount + 1)
            if(!lightModifierIsAdded){
                let troopLight = (props.faction === "The Tyranny" ? 
                    new Troop("Tyranny","light","Petrov Unit",3,2,5,0) 
                : 
                    new Troop("Necropolitan","light","Legionnaire",3,2,5,0))
                props.setLightUnits([...props.lightUnits, {troopLight}])
                console.log({troopLight})
                props.setPoints(props.points - 100)
            } else {
                let troopLight = (props.faction === "The Tyranny" ? 
                    new Troop("Tyranny","light","Petrov Unit",3,2,5,getModifier(1,10)) 
                : 
                    new Troop("Necropolitan","light","Legionnaire",3,2,5,getModifier(1,10)))
                props.setLightUnits([...props.lightUnits, {troopLight}])
                console.log({troopLight})
                props.setPoints(props.points - 125)
            }
        } 
        else if(e.target.className === "buyMedium" && props.points>=200) {
            // setMediumCount(mediumCount + 1)
            // props.setPoints(props.points - 200)
            if(!medModifierIsAdded){
                let troopMed = (props.faction === "The Tyranny" ? 
                    new Troop("Tyranny","medium","Commando Unit",6,5,3,0) 
                : 
                    new Troop("Necropolitan","medium","Vengeful Dead",6,5,3,0))
                props.setMedUnits([...props.medUnits, {troopMed}])
                console.log(troopMed)
                props.setPoints(props.points - 200)
            } else {
                let troopMed = (props.faction === "The Tyranny" ? 
                    new Troop("Tyranny","medium","Commando Unit",6,5,3,getModifier(1,10)) 
                : 
                    new Troop("Necropolitan","medium","Vengeful Dead",6,5,3,getModifier(1,10)))
                props.setMedUnits([...props.medUnits, {troopMed}])
                console.log(troopMed)
                props.setPoints(props.points - 250)
            }
        } 
        else if(e.target.className === "buyHeavy" && props.points>=500) {
            // setHeavyCount(heavyCount + 1)
            // props.setPoints(props.points - 500)
            if(!heavyModifierIsAdded){
                let troopHeavy = (props.faction === "The Tyranny" ? 
                    new Troop("Tyranny","heavy","Siegebreaker Unit",10,7,1,0) 
                : 
                    new Troop("Necropolitan","heavy","Promethid",10,7,1,0))
                props.setHeavyUnits([...props.heavyUnits, {troopHeavy}])
                console.log(troopHeavy)
                props.setPoints(props.points - 500)
            } else {
                let troopHeavy = (props.faction === "The Tyranny" ? 
                    new Troop("Tyranny","heavy","Siegebreaker Unit",10,7,1,getModifier(1,10)) 
                : 
                    new Troop("Necropolitan","heavy","Promethid",10,7,1,getModifier(1,10)))
                props.setHeavyUnits([...props.heavyUnits, {troopHeavy}])
                console.log(troopHeavy)
                props.setPoints(props.points - 600)
            }
        } else {
        console.log("insufficient points!")
        }
    }

    const handleModifier = (e) => {
        if(e.target.id === "light-modifier") {
            lightModifierIsAdded ? setLightModifierIsAdded(false) : setLightModifierIsAdded (true)
        } else if(e.target.id === "med-modifier") {
            medModifierIsAdded ? setMedModifierIsAdded(false) : setMedModifierIsAdded (true)
        } else if(e.target.id === "heavy-modifier") {
            heavyModifierIsAdded ? setHeavyModifierIsAdded(false) : setHeavyModifierIsAdded (true)
        } 
    }

    const recycle = (e) => {
        // if( e.target.className === "recycleLight" && lightCount > 0){
        //     setLightCount(lightCount - 1)
        //     props.setPoints(props.points + 35)
        // } else if( e.target.className === "recycleMedium" && mediumCount > 0){
        //     setMediumCount(mediumCount - 1)
        //     props.setPoints(props.points + 70)
        // } else if( e.target.className === "recycleHeavy" && heavyCount > 0){
        //     setHeavyCount(heavyCount - 1)
        //     props.setPoints(props.points + 175)
        // } else {
        //     console.log("No units to recycle.")
        // }
        console.log("!! Under Construction !!")
    }

    return (
        <div className='unit-purchase'>
            <div>Units</div>
            <div className='light'>
                <p>{props.faction === "The Tyranny" ? "Petrov Units" : "Legionnaires"}: {props.lightUnits.length}</p>
                <p>Cost: {!lightModifierIsAdded ? "100pts" : "(M) 125pts"}</p>
                <button id="light-modifier" onClick={(e) => handleModifier(e)}>{!lightModifierIsAdded ? "Add Modifier" : "Remove Modifier"}</button>
                <br/>
                <button className='buyLight' onClick={(e) => troops(e)}>Buy</button>
                <button className='recycleLight' onClick={(e) => recycle(e)}>Recycle</button>
            </div>
            <div className='medium'>
                <p>{props.faction === "The Tyranny" ? "Commando Units" : "Vengeful Dead"}: {mediumCount} </p>
                <p>Cost: {!medModifierIsAdded ? "200pts" : "(M) 250pts"}</p>
                <button id="med-modifier" onClick={(e) => handleModifier(e)}>{!medModifierIsAdded ? "Add Modifier" : "Remove Modifier"}</button>
                <br/>
                <button className='buyMedium' onClick={(e) => troops(e)}>Buy</button>
                <button className='recycleMedium' onClick={(e) => recycle(e)}>Recycle</button>
            </div>
            <div className='heavy'>
                <p>{props.faction === "The Tyranny" ? "Siegebreaker Units" : "Promethids"}: {heavyCount} </p>
                <p>Cost: {!heavyModifierIsAdded ? "500pts" : "(M) 600pts"}</p>
                <button id="heavy-modifier" onClick={(e) => handleModifier(e)}>{!heavyModifierIsAdded ? "Add Modifier" : "Remove Modifier"}</button>
                <br/>
                <button className='buyHeavy' onClick={(e) => troops(e)}>Buy</button>
                <button className='recycleHeavy' onClick={(e) => recycle(e)}>Recycle</button>
            </div>
            { props.faction === "The Necropolis" ?
            <>
                <div className='ruiner'>
                    <p>Deathdreg Ruiners: {heavyCount} </p>
                    <p>Cost:</p> 
                    <ul>
                        <li>1x Ruiner's Heart</li>
                        <li>1x Ruiner's Eye</li> 
                        <li>1x Ruiner's Arms</li>
                    </ul>
                    <button className='buyRuiner' onClick={() => console.log("!! Under Construction !!")}>buy</button>
                    <button className='recycleRuiner' onClick={() => console.log("!! Under Construction !!")}>recycle</button>
                </div>
            </>
            :
            <></>
            }
        </div>
    )
}
