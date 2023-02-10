import React, { useState, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [typePlan, setTypePlan] = useState(
        {
            plan: "Arcade", // name
            price: 9,
            isMonthly: true
        },
    )
    const [pickAddOns, setPickAddOns] = useState([])
    // const type
    const [steps, setSteps] = useState(1)


    return (
        <DataContext.Provider value={[typePlan, setTypePlan, steps, setSteps, pickAddOns, setPickAddOns]} >
            {props.children}
        </DataContext.Provider>
    )
}
