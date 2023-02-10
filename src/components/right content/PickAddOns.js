import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'

const ADD_ONS_DEFAULT_VALUE = {
    online_service: "Online Service",
    large_storage: "Large Storage",
    customize_profile: "Customize Profile",
}

export const PickAddOns = () => {
    const [typePlan, setTypePlan, steps, setSteps, pickAddOns, setPickAddOns] = useContext(DataContext)

    const { isMonthly } = typePlan

    const handlePickAddOns = (e, price) => {
        const value = e.target.value
        const checked = e.target.checked
        if (checked) {
            setPickAddOns(prev => [...prev, { pick: value, price: price }])
            return
        } else {
            setPickAddOns(prev => prev.filter((el) => el.pick !== value))
        }
    }




    return (
        <div>
            <div>
                <h1 className=' text-[34px] text-primaryblue font-bold mb-1'>
                    Pick add-ons
                </h1>
                <p className=' text-secondary text-lg'>
                    Add-ons help enhance your gaming experience.
                </p>
            </div>
            <div className=' flex flex-col mt-8 gap-y-4'>
                <div className=' w-full h-20 border rounded-lg flex items-center justify-between p-5 cursor-pointer hover:border-secondaryblue'>
                    <div className=' flex items-center gap-x-6'>
                        <input type='checkbox' className=' w-5 h-5'
                            value={'Online Service'}
                            checked={pickAddOns.filter(el => el.pick === "Online Service").length}
                            onChange={(e) => handlePickAddOns(e, isMonthly ? 1 : 10)}
                        />
                        <div className=' flex flex-col'>
                            <h1 className=' text-lg text-primaryblue font-medium'>
                                Online Service
                            </h1>
                            <p className=' text-secondary'>
                                Accsess to multiplayer games
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-secondaryblue text-lg'>$+{isMonthly ? 1 : 10}/mo</h1>
                    </div>
                </div>
                <div className=' w-full h-20 border rounded-lg flex items-center justify-between p-5 cursor-pointer hover:border-secondaryblue'>
                    <div className=' flex items-center gap-x-6'>
                        <input type='checkbox' className=' w-5 h-5'
                            value={'Large Storage'}
                            checked={pickAddOns.filter(el => el.pick === "Large Storage").length}
                            onChange={(e) => handlePickAddOns(e, isMonthly ? 2 : 20)} />
                        <div className=' flex flex-col'>
                            <h1 className=' text-lg text-primaryblue font-medium'>
                                Online Service
                            </h1>
                            <p className=' text-secondary'>
                                Accsess to multiplayer games
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-secondaryblue text-lg'>$+{isMonthly ? 2 : 20}/mo</h1>
                    </div>
                </div>
                <div className=' w-full h-20 border rounded-lg flex items-center justify-between p-5 cursor-pointer hover:border-secondaryblue'>
                    <div className=' flex items-center gap-x-6'>
                        <input type='checkbox' className=' w-5 h-5'
                            value={'Customizable profile'}
                            onClick={(e) => handlePickAddOns(e, isMonthly ? 2 : 20)} />
                        <div className=' flex flex-col'>
                            <h1 className=' text-lg text-primaryblue font-medium'>
                                Online Service
                            </h1>
                            <p className=' text-secondary'>
                                Accsess to multiplayer games
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-secondaryblue text-lg'>$+{isMonthly ? 2 : 20}/mo</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
