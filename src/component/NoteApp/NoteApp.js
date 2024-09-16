import React, { Component } from 'react'
import Header from '../Header'
export class NoteApp extends Component {
    render() {
        return (
            <>
                <div className='grid grid-cols-12'>
                    {/* aside */}
                    <div className='col-span-2'>

                    </div>
                    {/* header && main */}
                    <div className='col-span-10'>
                        <div className="container ">
                            <Header></Header>
                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default NoteApp