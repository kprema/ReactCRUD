import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// const store = createStore((state = { count: 0 }, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             count: state.count + 1
//         }
//     }
//     else if (action.type === 'DECREMENT') {
//         return {
//             count: state.count - 1
//         }
//     }
//     else {
//         return state
//     }
// });

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
    }
});


store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));



const template = (
    <div>
        <h1>Sample 1</h1>
    </div>
);

const AppRoute = document.getElementById('app');
ReactDOM.render(template, AppRoute);