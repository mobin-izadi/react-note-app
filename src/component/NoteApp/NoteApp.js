import React, { Component } from 'react'
import Header from '../Header'
import { FaPlusCircle } from "react-icons/fa";
export class NoteApp extends Component {
    render() {
        return (
            <>
                <div className='grid grid-cols-12 min-h-screen'>
                    {/* aside */}
                    <div className='col-span-2 min-h-[calc(100vh-112px)] mt-auto flex flex-col items-center gap-4'>
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
                    <div className='col-span-10'>
                        <Header></Header>
                        <main className='bg-gray-100 min-h-[calc(100vh-112px)] rounded-t-lg rounded-bl-lg'>

                        </main>

                    </div>

                </div>

            </>
        )
    }
}

export default NoteApp