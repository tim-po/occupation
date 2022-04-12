import React, {RefObject, useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {FloorType} from "../../types";

type MapControlProps = {
    zoom: number;
    setZoom: (ev: React.SetStateAction<number>) => void;
    floors: FloorType[];
    mapHeight: number;
}
function MapControl({zoom, setZoom, floors, mapHeight}: MapControlProps) {
    const [search] = useSearchParams()
    const floor = search.get('floor') || 1


    useEffect(()=>{
        floors[+floor - 1].ref!.current!.style!.transform = `scale(${zoom})`
    }, [zoom])
    const zoomPlus = () =>{
        if (+zoom <= 1) {
            setZoom(+zoom + 0.1)
        }
    }
    const zoomMinus = () =>{
        if (zoom  > 0.2) {
            setZoom((cur) => cur-0.1)
        }
    }

    return (
        <div>
            <div className="zoomButtonsBox">
            <button
                onClick={zoomPlus}
                className={"buttonsItem "}
            >
                +
            </button>
            <button
                onClick={zoomMinus}
                className="buttonsItem"
            >
                -
            </button>
        </div>
            <div className="resetButtonBox">
                <Link to={`/?floor=${floor}`} className={"buttonsItem "}  onClick={() => {
                    setZoom(mapHeight / floors[+floor - 1].floorMap.height)
                }}>
                {/*<button*/}
                {/*   */}
                {/*    */}
                {/*>*/}
                    0
                {/*</button>*/}
                </Link>
            </div>
        </div>
    );
}

export default MapControl;
