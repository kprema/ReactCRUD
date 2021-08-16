import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const Header = () => (
    <div>
        <h1>Expense Calculator</h1>
        <NavLink to='/' activeClassName='is-active' className="navLink">Home</NavLink>
        <NavLink to='/create' activeClassName='is-active' className="navLink">Create</NavLink>
        <NavLink to='/edit' activeClassName='is-active' className="navLink">Edit</NavLink>
        <NavLink to='/help' activeClassName='is-active' className="navLink">Help</NavLink>
    </div>
);


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route path='/' component={ExpenseDashboard} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;