import React from 'react'
import {Link} from 'react-router-dom'
import "../Header/Nav.css";
import { useState } from 'react';
export default function Nav({setIsLogin}) {
    let [search, setSearch ] = useState();
    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <nav className="Nav">
            <h1 className='logoheading'>
        Notes
        <span>Manager</span>{" "}
      </h1>
        
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="search"
            placeholder="Search by Title/Description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="search">Search Notes</label>
        </form>
        <ul>
          <li>
            <Link to="/">All-Notes</Link>
          </li>
          <li>
            <Link to="/create">Add New Notes</Link>
          </li>
          <li  onClick={logoutSubmit}>
            <Link to="/">Logout</Link>
          </li>
         
        </ul>
      </nav>
    )
}

