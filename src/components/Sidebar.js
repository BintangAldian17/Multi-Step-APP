import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

export const Sidebar = () => {
    const [summaryData, setSummaryData, steps, setSteps] = useContext(DataContext)


    return (
        <div className=" w-[40%] h-full bg-sidebarDesktop bg-no-repeat ml-4">
            <div className=' flex flex-col pt-10 pl-9 gap-y-7'>
                <div className='  flex items-center gap-x-4'>
                    <div className={` ${steps === 1 ? ' bg-bgStep text-black' : 'text-white'} w-9 h-9 rounded-full border border-white  flex justify-center items-center font-bold`}>
                        1
                    </div>
                    <div className=' text-white uppercase'>
                        <p className=' text-sm'>step 1</p>
                        <h1 className=' font-bold tracking-wider'>Your Info</h1>
                    </div>
                </div>
                <div className='  flex items-center gap-x-4'>
                    <div className={` ${steps === 2 ? ' bg-bgStep text-black' : 'text-white'} w-9 h-9 rounded-full border flex justify-center items-center font-bold`}>
                        2
                    </div>
                    <div className=' text-white uppercase'>
                        <p className=' text-sm'>step 2</p>
                        <h1 className=' font-bold tracking-wider'>Select Plan</h1>
                    </div>
                </div>
                <div className='  flex items-center gap-x-4'>
                    <div className={`${steps === 3 ? ' bg-bgStep text-black' : 'text-white'} w-9 h-9 rounded-full border flex justify-center items-center font-bold`}>
                        3
                    </div>
                    <div className=' text-white uppercase'>
                        <p className=' text-sm'>step 3</p>
                        <h1 className=' font-bold tracking-wider'>Pick Add Ons</h1>
                    </div>
                </div>
                <div className='  flex items-center gap-x-4'>
                    <div className={`${steps === 4 ? ' bg-bgStep text-black' : 'text-white'} w-9 h-9 rounded-full border flex justify-center items-center font-bold`}>
                        4
                    </div>
                    <div className=' text-white uppercase'>
                        <p className=' text-sm'>step 4</p>
                        <h1 className=' font-bold tracking-wider'>Summary</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
