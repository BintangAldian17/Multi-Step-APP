import React from 'react'

export const Form = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[34px] text-primaryblue font-bold mb-1'>
                    Personal info
                </h1>
                <p className=' text-secondary text-lg'>
                    Please provide your name,email address,and phone number.
                </p>
            </div>
            <div className=' flex flex-col mt-8 text-primaryblue'>
                <form className=' flex flex-col gap-y-6'>
                    <label>
                        <div className=' mb-1'>
                            <h1>Name</h1>
                        </div>
                        <input className=' w-full h-11 border border-borderform pl-5 focus:border-violet-600 focus:outline-none cursor-pointer rounded-md' placeholder='e.g. Stephen King' type='text' required />
                    </label>
                    <label>
                        <div className=' mb-1'>
                            <h1>Email Address</h1>
                        </div>
                        <input className=' w-full h-11 border border-borderform pl-5 focus:border-violet-600 focus:outline-none cursor-pointer rounded-md' placeholder='e.g. stephenking@lorem.com' type='email' required />
                    </label>
                    <label>
                        <h1 className=' mb-1'>Phone Number</h1>
                        <input className=' w-full h-11 border border-borderform pl-5 focus:border-violet-600 focus:outline-none cursor-pointer rounded-md' placeholder='e.g.+1 234 567 890' type='number' required />
                    </label>
                </form>
            </div>
        </div>
    )
}
