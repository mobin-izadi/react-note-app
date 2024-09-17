import React, { Component } from 'react'
import Header from '../Header'
import { FaPlusCircle } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ColorBox from './ColorBox';
import BoxNote from './BoxNote';

export class NoteApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            isAddNewNote: false,
            newNote: {
                id: null,
                isFavorite: false,
                date: null,
                title: '',
                description: '',
                color: '#fff',


            },
            notes: [],

        }

        this.showAddNewNoteHandler = this.showAddNewNoteHandler.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.titleNoteHandler = this.titleNoteHandler.bind(this)
        this.descriptionNoteHandler = this.descriptionNoteHandler.bind(this)
        this.addNewNote = this.addNewNote.bind(this)
        this.addToFavorite = this.addToFavorite.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.removeToFavorite = this.removeToFavorite.bind(this)
    }

    removeToFavorite(id) {
        this.setState(preState => ({
            notes: preState.notes.map(note => {
                if (note.id === id) {
                    return { ...note, isFavorite: false }
                } else {
                    return note;
                }
            })
        }))
    }

    removeNote(id) {
        let newNotes = this.state.notes.filter(note => note.id != id)
        this.setState({
            notes: [...newNotes],
        })
    }

    addToFavorite(id) {
        this.setState(preState => ({
            notes: preState.notes.map(note => {
                if (note.id === id) {
                    return { ...note, isFavorite: true }
                } else {
                    return note;
                }
            })
        }))
    }

    addNewNote() {
        console.log(this.state.newNote);

        let now = new Date()
        this.setState(preState => ({
            notes: [...preState.notes, { ...preState.newNote, id: this.state.notes.length + 1, date: `${now.getFullYear()}/${now.getMonth()}/${now.getDay()} ` }],
            newNote: {
                id: null,
                isFavorite: false,
                date: null,
                title: '',
                description: '',
                color: '#fff',

            },
        }))
    }

    changeColor(color) {
        console.log(color);
        this.setState(preState => ({
            newNote: {
                ...preState.newNote,
                color
            }
        }))
    }

    titleNoteHandler(event) {
        this.setState(preState => ({
            newNote: {
                ...preState.newNote,
                title: event.target.value
            }
        }))
    }

    descriptionNoteHandler(event) {
        this.setState(preState => ({
            newNote: {
                ...preState.newNote,
                description: event.target.value
            }
        }))

    }

    showAddNewNoteHandler() {
        this.setState(preState => ({
            isAddNewNote: !preState.isAddNewNote,
            newNote: {
                id: null,
                date: null,
                title: '',
                description: '',
                color: '#fff',
                isFavorite: false,
            },
        }))
    }
    render() {

        let checkIsFavoriteNote = this.state.notes.some(note => note.isFavorite === true)



        return (
            <>
                {/* add new note wrapper */}
                {this.state.isAddNewNote && (<div className='fixed inset-0 flex justify-center items-center '>
                    <div style={{ background: this.state.newNote.color }} className='w-80 md:w-[500px]  shadow-lg rounded-lg p-2'>
                        <div className='flex justify-end mb-5'>
                            <button onClick={this.showAddNewNoteHandler}>
                                <IoMdClose className='w-7 h-7' />
                            </button>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <input type="text" placeholder='Title ...' className='border rounded-lg h-10 p-2 outline-none' onChange={this.titleNoteHandler} value={this.state.newNote.title} />
                            <input type="text" placeholder='description ...' className='border rounded-lg h-10 p-2 outline-none' onChange={this.descriptionNoteHandler} value={this.state.newNote.description} />
                        </div>
                        <div className='flex items-center gap-2 my-3'>
                            {this.state.colors.map(color => (< ColorBox key={color} color={color} onChangeColor={this.changeColor} />))}
                        </div>
                        <div className='flex justify-center my-5 '>
                            <button className='bg-blue-600 text-white  py-3 px-5 rounded-lg flex justify-center items-center gap-1' onClick={this.addNewNote}>
                                <FaSquarePlus className='w-6 h-6 text-white'></FaSquarePlus>Add</button>
                        </div>
                    </div>


                </div>)}

                <div className='grid grid-cols-12 min-h-screen'>
                    {/* aside */}
                    <div className='col-span-12 md:col-span-2 md:pt-28 flex flex-col items-center gap-4 mb-3 md:mb-0 '>
                        <Header className='md:hidden flex justify-between gap-2 items-center px-2 my-2 flex-wrap'></Header>
                        {/* add new note */}
                        <div className='flex flex-col items-center gap-2'>
                            <button onClick={this.showAddNewNoteHandler}>
                                <FaPlusCircle className='w-10 h-10 text-blue-600' />
                            </button>
                            <p>Add new</p>
                        </div>

                    </div>
                    {/* header && main */}
                    <div className='col-span-12 md:col-span-10 mx-4 md:mx-0'>
                        <Header className='hidden md:flex justify-between items-center h-28 pr-4'></Header>
                        <main className='bg-gray-100 min-h-[calc(100vh-112px)] rounded-t-lg rounded-bl-lg p-3'>
                            <div>
                                <h4 className='font-medium text-2xl'>My favorites</h4>
                                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 my-3 min-h-20'>
                                    {checkIsFavoriteNote === true ? (this.state.notes.map(note => {
                                        if (note.isFavorite) {
                                            return <BoxNote key={note.id}  {...note} onRemoveToFavorite={this.removeToFavorite} onRemoveNote={this.removeNote} />
                                        }

                                    })) : (<p className='text-center col-span-full'>Empty 🌱🌟</p>)

                                    }
                                </div>
                            </div>

                            <div>
                                <h4 className='font-medium text-2xl'>My Note</h4>
                                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 my-3'>
                                    {this.state.notes.length > 0 ? (this.state.notes.map(note => (<BoxNote key={note.id} {...note} onAddToFavorite={this.addToFavorite} onRemoveToFavorite={this.removeToFavorite} s onRemoveNote={this.removeNote} />))) : (<p className='text-center col-span-full '>No note has been added</p>)}

                                </div>
                            </div>
                        </main>

                    </div >

                </div >

            </>
        )
    }
}

export default NoteApp