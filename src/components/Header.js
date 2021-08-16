import React from 'react';

const Header = () => (
    <div>
        <h1>Header</h1>
        <NavLink to='/' activeClassName='is-active'>Home</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </div>
);

export default Header;