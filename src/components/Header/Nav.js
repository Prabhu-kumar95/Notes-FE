import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import "../Header/Nav.css";

const Nav = () => {
    let { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
        
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
          <Link to="/Dash">All-Notes</Link>
        </li>
        <li>
          <Link to="book">Add New Notes</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Nav;
