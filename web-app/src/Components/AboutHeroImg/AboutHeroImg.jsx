import React, { Component } from 'react'
import './AboutHeroImg.css'

class AboutHeroImg extends Component {
    render() {
        return (

                <div className='hero-abimg'>
                    
                    <div className='heading'>
                        <h1>{this.props.heading}</h1>
                        <p> {this.props.text} </p>
                    </div>
                </div>


        )
    }
}

export default AboutHeroImg;