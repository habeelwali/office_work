import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
          <h1>Home</h1>
          <nav>
            <Link to="/">list</Link> 
            <Link to="/adduser">Add user</Link>
          </nav>
        </div>
      );
}

export default Header