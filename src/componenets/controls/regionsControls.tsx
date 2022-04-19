import React, {RefObject} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {FloorType} from "../../types";

type RegionsControlsProps = {
    floors: FloorType[],
    zoomToElement: (node: HTMLElement | string, customScale: number |undefined, animationTime: number, animationName: string)=>void
}

function RegionsControls({zoomToElement, floors}:RegionsControlsProps) {
    const [search] = useSearchParams()
    const floor = search.get('floor') || 1
    const region = search.get('region') || ''
    const regions = floors[+floor -1].regions

    return (
        <div>
            <h1 className={'title'}>Выбор зоны</h1>
            <div className="regionsList">
                {regions.map((el) => {
                    return (
                        <Link key={el.name}
                              to={`/?floor=${floor}&region=${el.name}`}
                              className={"regionsListItem " + (region === el.name && "active")}
                              onClick={(e) => zoomToElement(el.name,undefined,0, 'linear' )
                           }>
                            {el.description}
                        </Link>
                    );
                })}
            </div>
        </div>

    );
}

export default RegionsControls;
