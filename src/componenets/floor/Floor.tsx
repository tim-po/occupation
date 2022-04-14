import React, { RefObject} from "react";
import "./floor.scss";
import SVG from 'react-inlinesvg';

import {MapObject, Region} from "../../types";
import {useSearchParams} from "react-router-dom";

type FloorProps = {
    number: string,
    regions: Region[],
    refFloor: RefObject<HTMLDivElement>,
    floorMap: MapObject,
}
const Floor = ({number, regions, refFloor, floorMap}: FloorProps) => {
    const css = {
        background: `url("${floorMap.src}")`,
        width:floorMap.width,
        height:floorMap.height,
    }
    const [search] = useSearchParams()
    const currentRegion = search.get('region')
    return (
        <div className="svgMap firstFloorMap" style={css} ref={refFloor}>

            {
                regions.map((region) => {
                   return(<svg className={'regions ' + (currentRegion === region.name && 'active')}
                               width={region.width}
                               height={region.height}
                               ref = {region.ref}
                               key ={region.name}
                               style={{
                                   top: region.y,
                                   left:region.x,
                               }}>
                       <title id="unique-id">Checkout</title>
                       <SVG
                        src={region.src}
                        description={region.description}
                       />
                                      <foreignObject
                                              className="aboutSvg_container"
                                              x="0"
                                              y={region.height/2}
                                              width="180"
                                              height="160"
                                          >
                                              <div className= "aboutSvg">{region.description}</div>
                                      </foreignObject>
                   </svg>)
                })
            }

        </div>
    );
};

export default Floor;

