//  simpan sebagai constant
import { ADD_TILE, REMOVE_TILE } from './constants'

// actions Add
export function addTile (color) {
    return {
        type: ADD_TILE,
        created_at: Date.now(),
        color
    }
}

// actions Remove
export function removeTile (id) {
    return {
        type: REMOVE_TILE,
        id
    }
}