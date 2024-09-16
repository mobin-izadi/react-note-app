import React, { Component } from 'react'
import { GoSearch } from "react-icons/go";

export class Header extends Component {
    render() {
        return (
            <div className='flex justify-between items-center py-5'>
                {/* logo */}
                <h1 className='text-5xl  font-semibold'>
                    My Note
                </h1>
                {/* search */}
                <div className='flex justify-between items-center rounded-full bg-gray-100 py-3 px-2 basis-1/3'>
                    <input type="text" placeholder='search ...' className='bg-transparent outline-none h-full' />
                    <button>
                        <GoSearch className='w-7 h-7' />
                    </button>
                </div>
                {/* user panel */}
                <div className='flex items-center gap-1'>
                    <span>Mobin</span>
                    <img src="/images/avatar.jpg" alt="" className='w-10 h-10 rounded-full' />
                </div>


            </div>
        )
    }
}

export default Header