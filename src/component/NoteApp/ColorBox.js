import React, { Component } from 'react'

export class ColorBox extends Component {

    onChangeColor(color) {
        this.props.onChangeColor(color)
    }

    render() {
        return (
            <>
                {/* colors */}
                <button style={{ background: this.props.color }} className='bg-red-500 rounded-full w-6 h-6 border border-gray-100' onClick={this.onChangeColor.bind(this, this.props.color)}>
                </button>
            </>
        )
    }
}

export default ColorBox