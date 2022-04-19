import React, {RefObject, useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {FloorType} from "../../types";

type MapControlProps = {
    zoomIn: (step?: number, animationTime?: number, animationName?: string) => void,
    zoomOut: (step?: number, animationTime?: number, animationName?: string) => void,
    resetTransform: (x?: number, y?: number, scale?: number, animationTime?: number, animationName?:string) => void

}
function MapControl({zoomIn, zoomOut, resetTransform}: MapControlProps) {
    const [search] = useSearchParams()
    const floor = search.get('floor') || 1

    return (
        <div>
            <div className="zoomButtonsBox">
            <button
                onClick={()=> zoomIn(0.2, 0)}
                className={"buttonsItem "}
            >
                +
            </button>
            <button
                onClick={() => zoomOut(0.2, 0)}
                className="buttonsItem"
            >
                -
            </button>
        </div>
            <div className="resetButtonBox">
                <Link to={`/?floor=${floor}`}
                      className={"buttonsItem "}
                      onClick={() => resetTransform()}>
                    0
                </Link>
            </div>
        </div>
    );
}

export default MapControl;
