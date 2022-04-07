import React, {RefObject} from 'react';


type Region = {
    name: string, // works kinda like id
    description: string,
    ref:  RefObject<SVGSVGElement>,
    cameraIds: string[],
    src: string // region map image
    width: number,
    height: number,
    x: number, // in percent of map width
    y: number, // in percent of map heights
}

type MapObject = {
    src: string // background map image
    width: number,
    height: number,
}

type FloorType = {
    number: string,
    regions: Region[],
    ref: RefObject<HTMLDivElement>,
    floorMap: MapObject,
}

interface RegionsControlsPropsI{
    floors: FloorType[],
    setZoom: (ev: React.SetStateAction<number>) => void;
    selectedRegion:string,
    selectedFloor: string,
    setSelectedRegion: (ev: React.SetStateAction<string>) => void,
}

function RegionsControls({setZoom, floors,selectedFloor,  selectedRegion, setSelectedRegion}:RegionsControlsPropsI) {
    const MAP_HEIGHT = 961;
    const regions = floors[+selectedFloor -1].regions
    const floorRef = floors[+selectedFloor -1].ref
    return (
        <div>
            <div className="regionsList">
                {regions.map((el) => {
                    return (
                        <button
                            className={"regionsListItem " + (selectedRegion === el.name && "active")}
                            key={el.name}
                            onClick={() => {
                                setSelectedRegion(el.name);

                                let currentScale =
                                    MAP_HEIGHT /
                                    el.ref!.current!.height!.baseVal!
                                        .value;
                                currentScale = currentScale < 1 ? currentScale : 1;

                                floorRef!.current!.style.transform = `scale(${currentScale})`;

                                setZoom(currentScale);
                                el.ref!.current!.scrollIntoView({
                                    inline: "center",
                                    block: "center"
                                    // behavior: "smooth",
                                });
                            }}
                        >
                            {el.description}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default RegionsControls;
