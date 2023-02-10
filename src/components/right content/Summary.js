import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

export const Summary = () => {
    const [typePlan, setTypePlan, steps, setSteps, pickAddOns, setPickAddOns] = useContext(DataContext)
    const { isMonthly } = typePlan



    const handleChangeSteps = () => {
        setSteps(steps - 2)
    }


    console.log(pickAddOns, typePlan);
    return (
        <div>
            <div>
                <h1 className=' text-[34px] text-primaryblue font-bold mb-1'>
                    Finishing Up
                </h1>
                <p className=' text-secondary text-lg'>
                    Double-Check evrything looks OK before confirming.
                </p>
            </div>
            <div className=' w-full flex flex-col mt-8'>
                <div className=' flex flex-col bg-bgColorwindow rounded-lg'>
                    <div className=' flex justify-between items-center border-b mx-6 py-4'>
                        <div className=''>
                            <h1 className=' text-primaryblue font-medium text-lg'>{typePlan.plan}</h1>
                            <span className=' text-secondary underline cursor-pointer  hover:text-secondaryblue'
                                onClick={() => handleChangeSteps()} >
                                Change
                            </span>
                        </div>
                        <div>
                            <h1 className=' text-primaryblue text-xl font-bold'>${typePlan.price}/{isMonthly ? 'mo' : 'yr'}</h1>
                        </div>
                    </div>
                    <div className=' mx-6 py-4 flex flex-col gap-y-3'>
                        {
                            pickAddOns.map((item, index) => (
                                <div key={index} className='flex justify-between items-center'>
                                    <div>
                                        <h1 className=' text-secondary'>{item.pick}</h1>
                                    </div>
                                    <div>
                                        <h1>+${item.price}/{isMonthly ? 'mo' : "yr"}</h1>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
