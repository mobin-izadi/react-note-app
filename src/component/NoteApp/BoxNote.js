import React, { Component } from 'react'
import { MdDelete, MdFavorite, MdEdit } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export class BoxNote extends Component {

    addToFavorite(id) {
        this.props.onAddToFavorite(id)
    }
    removeToFavorite(id) {
        this.props.onRemoveToFavorite(id)
    }
    removeNote(id) {
        this.props.onRemoveNote(id)
    }
    render() {
        let { id, title, description, date, color, isFavorite, Favorite } = this.props


        return (
            <>
                {/* box */}
                <div style={{ background: color }} className='col-span-1 rounded-lg p-2 text-black overflow-hidden'>
                    <div className='flex justify-end'>
                        <span>{date}</span>
                    </div>
                    <p className='text-xl font-medium py-2 border-b overflow-x-auto '>{title}</p>
                    <p className='py-2 h-36 overflow-y-auto  break-words'>{description}</p>

                    <div className='flex justify-around items-center  my-3'>
                        <button><MdEdit className='w-8 h-8 text-blue-500 bg-white rounded-full p-1 ' /></button>

                        {isFavorite === false ? (<button><FaRegHeart className='w-8 h-8 text-yellow-500 bg-white rounded-full p-1 ' onClick={this.addToFavorite.bind(this, id)} /></button>) : (<button><MdFavorite className='w-8 h-8 text-yellow-500 bg-white rounded-full p-1 ' onClick={this.removeToFavorite.bind(this, id)} /></button>)}



                        <button><MdDelete className='w-8 h-8 text-red-500 bg-white rounded-full p-1 ' onClick={this.removeNote.bind(this, id)} /></button>
                    </div>
                </div>
            </>
        )
    }
}

export default BoxNote