import React from 'react'
   import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
          <NavLink to="/" activeClassName="active">Page 1</NavLink>
          <NavLink to="/PageTwo" activeClassName="active" style={{marginLeft:"5px"}}>Page 2</NavLink>
        </nav>
  )
}

export default Navigation