import React, { useEffect, useState } from 'react'

export default function Units(props) {

    const [lightUnits, setLightUnits] = useState({})

    const [medUnits, setMedUnits] = useState({})

    const [heavyUnits, setHeavyUnits] = useState({})

    const [lightCount, setLightCount] = useState(Object.keys(lightUnits).length)

    const [mediumCount, setMediumCount] = useState(Object.keys(medUnits).length)

    const [heavyCount, setHeavyCount] = useState(Object.keys(heavyUnits).length)

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
    }

    let troopPetrov = new Troop("Tyranny","light","Petrov Unit",3,2,5,0)

    let troopLegion = new Troop("Necropolitan", "light","Legionnaire",3,2,5,0)

    useEffect(() => {
        console.log(lightCount, lightUnits)
        console.log(mediumCount)
        console.log(heavyCount)
    }, [lightCount, lightUnits, mediumCount, heavyCount])


    const troops = (e) => {
        if(e.target.className === "buyLight" && props.points>=100){
            // setLightCount(lightCount + 1)
            setLightUnits({...lightUnits, [Object.keys(lightUnits).length + 1]: props.faction === "The Tyranny" ? {troopPetrov} : {troopLegion}})
            console.log(lightUnits)
            props.setPoints(props.points - 100)
        } 
        else if(e.target.className === "buyMedium" && props.points>=200) {
            setMediumCount(mediumCount + 1)
            props.setPoints(props.points - 200)
        } 
        else if(e.target.className === "buyHeavy" && props.points>=500) {
            setHeavyCount(heavyCount + 1)
            props.setPoints(props.points - 500)
        } else {
        console.log("insufficient points!")
        }
    }

    const recycle = (e) => {
        if( e.target.className === "recycleLight" && lightCount > 0){
            setLightCount(lightCount - 1)
            props.setPoints(props.points + 35)
        } else if( e.target.className === "recycleMedium" && mediumCount > 0){
            setMediumCount(mediumCount - 1)
            props.setPoints(props.points + 70)
        } else if( e.target.className === "recycleHeavy" && heavyCount > 0){
            setHeavyCount(heavyCount - 1)
            props.setPoints(props.points + 175)
        } else {
            console.log("No units to recycle.")
        }
    }

    return (
        <>
            <div>Units</div>
            <div className='light'>
                <p>{props.faction === "The Tyranny" ? "Petrov Units" : "Legionnaires"}: {Object.keys(lightUnits).length}</p>
                <p>Cost: 100pts</p>
                <button onClick={() => console.log(lightUnits[1].troopPetrov.special())}>add modifier</button>
                <br/>
                <button className='buyLight' onClick={(e) => troops(e)}>buy</button>
                <button className='recycleLight' onClick={(e) => recycle(e)}>recycle</button>
            </div>
            <div className='medium'>
                <p>{props.faction === "The Tyranny" ? "Commando Units" : "Vengeful Dead"}: {mediumCount} </p>
                <p>Cost: 200pts</p>
                <button className='buyMedium' onClick={(e) => troops(e)}>buy</button>
                <button className='recycleMedium' onClick={(e) => recycle(e)}>recycle</button>
            </div>
            <div className='heavy'>
                <p>{props.faction === "The Tyranny" ? "Siegebreaker Units" : "Promethids"}: {heavyCount} </p>
                <p>Cost: 500pts</p>
                <button className='buyHeavy' onClick={(e) => troops(e)}>buy</button>
                <button className='recycleHeavy' onClick={(e) => recycle(e)}>recycle</button>
            </div>
        </>
    )
}
