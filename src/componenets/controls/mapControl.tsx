import React, {RefObject, useEffect, useState} from 'react';

type MapObject = {
    src: string // background map image
    width: number,
    height: number,
}
type Region = {
    name: string, // works kinda like id
    description: string,
    cameraIds: string[],
    src: string // region map image
    width: number,
    height: number,
    x: number, // in percent of map width
    y: number, // in percent of map heights
}
type FloorType = {
    number: string,
    regions: Region[],
    ref: RefObject<HTMLDivElement>,
    floorMap: MapObject,
}
type MapControlProps = {
    zoom: number;
    setZoom: (ev: React.SetStateAction<number>) => void;
    selectedFloor: string;
    setSelectedRegion:  (ev: React.SetStateAction<string>)=> void;
    floors: FloorType[];
    mapHeight: number;
}
function MapControl({zoom, setZoom, selectedFloor, setSelectedRegion, floors, mapHeight}: MapControlProps) {
    /*
    TODO: экспортировать эти константы
     */

    useEffect(()=>{
        floors[+selectedFloor - 1].ref!.current!.style!.transform = `scale(${zoom})`
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
                <button
                    onClick={() => {
                        setZoom(mapHeight / floors[+selectedFloor - 1].floorMap.height)
                        setSelectedRegion("")
                    }}
                    className={"buttonsItem "}
                >
                    0
                </button>
            </div>
        </div>
    );
}

export default MapControl;
