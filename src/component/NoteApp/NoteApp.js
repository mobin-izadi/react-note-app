import React, { Component } from 'react'
import Header from '../Header'
import { FaPlusCircle } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { MdDelete, MdFavorite, MdEdit } from "react-icons/md";

export class NoteApp extends Component {
    render() {
        return (
            <>
                <div className='grid grid-cols-12 min-h-screen'>
                    {/* aside */}
                    <div className='col-span-12 md:col-span-2 md:pt-28 flex flex-col items-center gap-4 mb-3 md:mb-0 '>
                        <Header className='md:hidden flex justify-between gap-2 items-center px-2 my-2 flex-wrap'></Header>
                        {/* add new note */}
                        <div className='flex flex-col items-center'>
                            <button>
                                <FaPlusCircle className='w-10 h-10 text-blue-600' />
                            </button>
                            <p>Add new</p>
                        </div>
                        {/* colors */}
                        <div className='flex flex-col items-center gap-2'>
                            <button className='bg-red-500 rounded-full w-6 h-6'>

                            </button>

                        </div>
                    </div>
                    {/* header && main */}
                    <div className='col-span-12 md:col-span-10 mx-4 md:mx-0'>
                        <Header className='hidden md:flex justify-between items-center h-28 pr-4'></Header>
                        <main className='bg-gray-100 min-h-[calc(100vh-112px)] rounded-t-lg rounded-bl-lg p-3'>
                            <div>
                                <h4 className='font-medium text-2xl'>My favorites</h4>
                                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 my-3'>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div>
                                <h4 className='font-medium text-2xl'>My Note</h4>
                                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 my-3'>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>
                                    {/* box */}
                                    <div style={{ background: '#EFABAC' }} className='col-span-1 rounded-lg p-2 text-black'>
                                        <div className='flex justify-end'>
                                            <span>11/2/2024</span>
                                        </div>
                                        <p className='text-xl font-medium py-2 border-b '>title</p>
                                        <p className='py-2 h-36 overflow-auto'>description</p>

                                        <div className='flex justify-around items-center  my-3'>
                                            <button><MdEdit className='w-8 h-8' /></button>
                                            <button><MdFavorite className='w-8 h-8 ' /></button>
                                            <button><MdDelete className='w-8 h-8' /></button>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </main>

                    </div>

                </div>

            </>
        )
    }
}

export default NoteApp