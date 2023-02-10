import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export const NavButton = () => {
    const [typePlan, setTypePlan, steps, setSteps] = useContext(DataContext)

    const handleNextStep = () => {
        setSteps(steps + 1)
    }

    return (
        steps >= 1 && steps !== 5 && (
            <div className={`flex items-center ${steps === 1 ? 'justify-end' : 'justify-between flex-row-reverse'}
            `}>
                <button className={` ${steps === 4 ? ' bg-secondaryblue' : ' bg-primaryblue'} w-[120px] py-3  text-white rounded-lg font-medium hover:bg-opacity-70`} onClick={handleNextStep}>
                    {
                        steps >= 1 && steps !== 4 ?
                            'Next Step'
                            :
                            'Confirm'
                    }
                </button>
                {
                    steps > 1 && steps !== 5 && (
                        <button className=' text-secondary font-medium' onClick={() => setSteps(steps - 1)}>Go Back</button>
                    )
                }
            </div>
        )
    )
}
