import React from 'react'
import { Link } from 'react-router-dom';

function NavBar({ notesNum }) {
    return (
        <div className='navBar'>
            <Link to='/profile'>
            <div className="navBarText"> My profile </div>
            </Link>
            <Link to='/notes'>
            <div className="navBarText"> My travel notes ({notesNum}) </div>
            </Link>
            <Link to="/addNote">
            <div className="navBarText">Add a note</div>
            </Link>
        </div >
    )
}

export default NavBar