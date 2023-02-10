import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { Form } from './right content/Form'
import { SelectPlan } from './right content/SelectPlan'
import { PickAddOns } from './right content/PickAddOns'
import { Summary } from './right content/Summary'
import { StepDone } from './right content/StepDone'
import { NavButton } from './right content/NavButton'

export const RightContent = () => {
    const [typePlan, setTypePlan, steps, setSteps] = useContext(DataContext)
    const renderRightContent = () => {
        switch (steps) {
            case 1:
                return <Form />
            case 2:
                return <SelectPlan />
            case 3:
                return <PickAddOns />
            case 4:
                return <Summary />
            case 5:
                return <StepDone />
            default:
                break;
        }
    }
    return (
        <div className=' h-full w-full'>
            <div className=' flex flex-col justify-between h-full px-[105px] pt-10 pb-5'>
                {
                    renderRightContent()
                }
                <NavButton />
            </div>
        </div>
    )
}
