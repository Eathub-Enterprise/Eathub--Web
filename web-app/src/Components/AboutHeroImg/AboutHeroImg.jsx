import React, { Component } from 'react'
import './AboutHeroImg.css'

class AboutHeroImg extends Component {
    render() {
        return (
            // <div className='aboutheroimgPage'>
                <div className='hero-img'>
                    
                    <div className='heading'>
                        <h1>{this.props.heading}</h1>
                        <p> {this.props.text} </p>
                    </div>
                </div>

            // </div>
        )
    }
}

export default AboutHeroImg;