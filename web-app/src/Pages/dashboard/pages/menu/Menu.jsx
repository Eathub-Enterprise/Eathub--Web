import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <div className="menu-section">
            <div className="menu-title">
                <div className="menu-title-header">
                <h2>Menu</h2>
                </div>
                <button Link to='/addMenu' className='menu-btn'>
                    Add Meal
                </button>
            </div>
            <div className="menu-table">
                <h4>Meal List here!</h4>
            </div>
        </div>
    )
}

export default Menu
