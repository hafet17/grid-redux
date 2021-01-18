import * as React from 'react';
import { useSelector } from 'react-redux';

import AddTileButton from '../AddTileButton'; // <----- (1)
import Tile from '../Tile'; // <----- (1)
const colors = ['red', 'blue', 'pink', 'yellow', 'gray'];

export default function Grid () {

    let gridTiles = useSelector(state => state.grid);

    return (
        <div>
            <div style={{ maxWidth: 400, overflow: "hidden" }}>
                {gridTiles.map((tile, index) => {
                    return <Tile {...tile} key={index} />
                })}
            </div>
            <br />
            <div>
                {colors.map(color => {
                    return <AddTileButton
                        key={color}
                        color={color}
                    />
                })}
            </div>
            {/* -------------------- */}
        </div>
    )
}
