import React, { Component } from 'react'
import './TermsHeroImg.css'

class TermsHeroImg extends Component {
    render() {
        return (

                <div className='hero-termsimg'>
                    
                    <div className='heading'>
                        <h1>{this.props.heading}</h1>
                        <p> {this.props.text} </p>
                    </div>
                </div>


        )
    }
}

export default TermsHeroImg;