import React, { useEffect, useState } from 'react'
import './UnitList.css'

export default function UnitList(props) {

    const [isShown, setIsShown] = useState(false)


    const toggleShow = () => {
        isShown ? setIsShown(false) : setIsShown(true)
    }

    
    let listLight = props.lightUnits.map((troop, index) => (

        <div className='troop-instance' key={index}>
            <div onClick={toggleShow}>
                <p>Unit {index+1}: {troop.troopLight.modifier > 0 ? troop.troopLight.special() : ""} {troop.troopLight.type}</p>
            </div>
            {isShown && (
                <div className='stats-tooltip'>Attack: {troop.troopLight.attack} 
                <span>Defense: {troop.troopLight.defense}</span> 
                <span>Agility: {troop.troopLight.agility}</span>
                {/* <span>Special Modifier: {troop.troopLight.modifier !== 0 ? troop.troopLight.special() : "None"}</span> */}
                <span>{troop.troopLight.modifier > 0 ? `${troop.troopLight.special()}: ${troop.troopLight.modifierDescription()}` : ""}</span>
            </div>
            )}
        </div>
    ))

    let listMed = props.medUnits.map((troop, index) => (

        <div className='troop-instance' key={index}>
            <div onClick={toggleShow}>
                <p>Unit {index+1}: {troop.troopMed.modifier > 0 ? troop.troopMed.special() : ""} {troop.troopMed.type}</p>
            </div>
            {isShown && (
                <div className='stats-tooltip'>Attack: {troop.troopMed.attack} 
                <span>Defense: {troop.troopMed.defense}</span> 
                <span>Agility: {troop.troopMed.agility}</span>
                {/* <span>Special Modifier: {troop.troopMed.modifier !== 0 ? troop.troopMed.special() : "None"}</span> */}
                <span>{troop.troopMed.modifier > 0 ? `${troop.troopMed.special()}: ${troop.troopMed.modifierDescription()}` : ""}</span>
            </div>
            )}
        </div>
    ))

    let listHeavy = props.heavyUnits.map((troop, index) => (

        <div className='troop-instance' key={index}>
            <div onClick={toggleShow}>
                <p>Unit {index+1}: {troop.troopHeavy.modifier > 0 ? troop.troopHeavy.special() : ""} {troop.troopHeavy.type}</p>
            </div>
            {isShown && (
                <div className='stats-tooltip'>Attack: {troop.troopHeavy.attack} 
                <span>Defense: {troop.troopHeavy.defense}</span> 
                <span>Agility: {troop.troopHeavy.agility}</span>
                {/* <span>Special Modifier: {troop.troopLight.modifier !== 0 ? troop.troopLight.special() : "None"}</span> */}
                <span>{troop.troopHeavy.modifier > 0 ? `${troop.troopHeavy.special()}: ${troop.troopHeavy.modifierDescription()}` : ""}</span>
            </div>
            )}
        </div>
    ))
    
    useEffect(() => {
        
    }, [props.lightUnits, props.medUnits, props.heavyUnits])

  return (
    <div>
        <div className='unit-list'>
            <button onClick={() => console.log(props.lightUnits, listLight)}>Light Units</button>
            {listLight}
        </div>
    
        <div className='unit-list'>
            <button onClick={() => console.log(props.lightUnits, listLight)}>Med Units</button>
            {listMed}
        </div>

        <div className='unit-list'>
            <button onClick={() => console.log(props.lightUnits, listLight)}>Heavy Units</button>
            {listHeavy}
        </div>
    </div>
  )
}