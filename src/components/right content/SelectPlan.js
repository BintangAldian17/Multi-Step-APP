import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'
import IconArcade from '../../assets/images/icon-arcade.svg'
import IconAdvanced from '../../assets/images/icon-advanced.svg'
import IconPro from '../../assets/images/icon-pro.svg'


const convertPrice = (plan) => {

}


export const SelectPlan = () => {
    const [typePlan, setTypePlan] = useContext(DataContext)
    const { isMonthly, plan } = typePlan

    const switchMonthly = () => {
        // const { plan, price, isMonthly } = typePlan
        if (typePlan.isMonthly === true) {
            setTypePlan({ ...typePlan, isMonthly: false, })
        } else {
            setTypePlan({ ...typePlan, isMonthly: true })
        }
    }

    const selectPlan = (plan, price) => {
        setTypePlan({ ...typePlan, plan: plan, price: price })
    }

    // const pickPlan = (plan, price) => {
    //     setSummaryData((prev) => ([{
    //         ...prev, plan: plan, price: price
    //     }]))
    // }

    console.log(typePlan);
    return (
        <div>
            <div>
                <h1 className=' text-[34px] text-primaryblue font-bold mb-1'>
                    Select Your Plan
                </h1>
                <p className=' text-secondary text-lg'>
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className={` flex items-stretch h-44 gap-x-5 mt-7 ${!isMonthly && 'h-48'}`}>
                <div className={` border h-full w-1/3 rounded-lg flex flex-col justify-between items-start p-4 hover:border-secondaryblue cursor-pointer ${plan === 'Arcade' && ' bg-bgColorwindow border-secondaryblue'}`}
                    onClick={() => selectPlan('Arcade', isMonthly ? 9 : 90)}
                >
                    <img src={IconArcade} alt='iconarcade' />
                    <div >
                        <h1 className={` text-primaryblue font-medium text-lg `}>
                            Arcade
                        </h1>
                        <p className={` text-secondary `}>
                            {isMonthly ? '$9/mo' : '$90/yr'}

                        </p>
                        {
                            !isMonthly && (
                                <h2>2 months free</h2>
                            )
                        }
                    </div>
                </div>
                <div className={` border h-full w-1/3 rounded-lg flex flex-col justify-between items-start pl-4 py-5 hover:border-secondaryblue cursor-pointer ${plan === 'Advanced' && 'bg-bgColorwindow border-secondaryblue'}`}
                    onClick={() => selectPlan('Advanced', isMonthly ? 12 : 120)}
                >
                    <img src={IconAdvanced} alt='iconadvanced' />
                    <div>
                        <h1 className=' text-primaryblue font-medium text-lg'>
                            Advanced
                        </h1>
                        <p className=' text-secondary'>
                            {isMonthly ? '$12/mo' : '$120/yr'}
                        </p>
                        {
                            !isMonthly && (
                                <h2>2 months free</h2>
                            )
                        }
                    </div>
                </div>
                <div className={` border h-full w-1/3 rounded-lg flex flex-col justify-between items-start pl-4 py-5 hover:border-secondaryblue cursor-pointer ${plan === 'Pro' && ' bg-bgColorwindow border-secondaryblue'}`}
                    onClick={() => selectPlan('Pro', isMonthly ? 15 : 150)}
                >
                    <img src={IconPro} alt='iconpro' />
                    <div>
                        <h1 className=' text-primaryblue font-medium text-lg'>
                            Pro
                        </h1>
                        <p className=' text-secondary'>
                            {isMonthly ? '$15/mo' : '$150/yr'}
                        </p>
                        {
                            !isMonthly && (
                                <h2>2 months free</h2>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className=' flex items-center h-11 rounded-md mt-6 bg-bgColorwindow justify-center'>
                <span className=' mr-7  text-primaryblue font-medium'>
                    Monthly
                </span>
                <input type='checkbox' className='hidden' id='dark-toggle'
                    value={isMonthly}
                    checked={!isMonthly}
                    onChange={() => switchMonthly()}
                />
                <label htmlFor='dark-toggle'>
                    <div className=' flex h-5 w-9 cursor-pointer items-center rounded-full bg-primaryblue p-1'>
                        <div className='toggle-circle h-3 w-3 rounded-full bg-white'></div>
                    </div>
                </label>
                <span className=' ml-7  text-primaryblue font-medium'>
                    Yearly
                </span>
            </div>
        </div>
    )
}
