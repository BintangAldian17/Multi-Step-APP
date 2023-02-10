import React, { useContext } from 'react'
import { Sidebar } from './Sidebar'
import { RightContent } from './RightContent'
import { DataContext } from './DataProvider'

export const Container = () => {
    const [summaryData, setSummaryData] = useContext(DataContext)

    return (
        <main className=" h-screen flex items-center justify-center">
            <div className=" h-[82vh] w-[65vw] bg-white shadow-lg rounded-xl">
                <div className=" h-full w-full py-5 flex">
                    <Sidebar />
                    <RightContent />
                    
                </div>
            </div>
        </main>
    )
}
