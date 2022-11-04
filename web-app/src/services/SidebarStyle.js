import React from 'react';
import { NavLink } from 'react-router-dom'

export const SidebarStyle = () => {
  return (
    <nav className="sidebar">
      <NavLink to ='overview' style={(isActive) => {
        return { color: isActive ? 'red': 'orange'} //use classNames instead
      }}>Overview</NavLink>
    </nav>
  )
}
