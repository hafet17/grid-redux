import React from 'react'

const initialState = [];
function reducer (state = initialState, action) {
    switch (action.type) {

        case 'ADD_TILE':
            const nextId = state.length + 1; // generate id
            const newTile = { id: nextId, color: action.color } // add nilai color
            return [...state, newTile];

        case 'REMOVE_TILE':
            return state.filter(tile => tile.id !== action.id)

        default:
            return state;
    }

}

export default reducer
