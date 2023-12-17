import React from "react";
import '../App.scss';

const Navbar = () => {

    return (
        <div>
            <header className="sticky-header">
                <nav>
                    <input type="radio" id="cards" name="view" checked/>
                    <label htmlFor="cards">Cards</label>

                    <input type="radio" id="tree" name="view"/>
                    <label htmlFor="tree">Tree</label>
                </nav>


            </header>
        </div>
    );
}


export default Navbar;

