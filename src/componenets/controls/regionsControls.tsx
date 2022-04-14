import React, {RefObject} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {FloorType} from "../../types";

type RegionsControlsProps = {
    floors: FloorType[],
    setZoom: (ev: React.SetStateAction<number>) => void;
    mapHeight: number
}

function RegionsControls({setZoom, floors, mapHeight}:RegionsControlsProps) {
    const [search] = useSearchParams()
    const floor = search.get('floor') || 1
    const region = search.get('region') || ''
    const regions = floors[+floor -1].regions
    const floorRef = floors[+floor -1].ref
    return (
        <div>
            <h1 className={'title'}>Выбор зоны</h1>
            <div className="regionsList">
                {regions.map((el) => {
                    return (
                        <Link key={el.name}
                              to={`/?floor=${floor}&region=${el.name}`}
                              className={"regionsListItem " + (region === el.name && "active")}
                              onClick={(e) => {

                            let currentScale =
                                mapHeight /
                                el.ref!.current!.height!.baseVal!.value;
                            currentScale = currentScale < 1 ? currentScale : 1;

                            floorRef!.current!.style.transform = `scale(${currentScale})`;

                            setZoom(currentScale);
                            el.ref!.current!.scrollIntoView({
                                inline: "center",
                                block: "center"
                                // behavior: "smooth",
                            });
                        }}>
                            {el.description}
                        </Link>
                    );
                })}
            </div>
        </div>

    );
}

export default RegionsControls;
