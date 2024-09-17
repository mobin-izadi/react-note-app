import React, { Component } from 'react'
import { GoSearch } from "react-icons/go";

export class Header extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {/* logo */}
                <h1 className='text-2xl md:text-5xl  font-semibold basis-2/5 md:basis-auto'>
                    My Note
                </h1>
                {/* search */}
                <div className='flex justify-between items-center rounded-full bg-gray-100 p-3 basis-full md:basis-1/3 order-3 md:order-none'>
                    <input type="text" placeholder='search ...' className='bg-transparent outline-none h-full w-full basis-full md:basis-auto' />
                    <button>
                        <GoSearch className='w-7 h-7' />
                    </button>
                </div>
                {/* user panel */}
                <div className='flex items-center justify-end md:justify-normal  gap-1 basis-2/5 md:basis-auto order-2 md:order-none '>
                    <span>Mobin</span>
                    <img src="/images/avatar.jpg" alt="" className='w-10 h-10 rounded-full' />
                </div>


            </div>
        )
    }
}

export default Header