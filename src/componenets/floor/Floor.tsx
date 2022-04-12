import React, {createElement, RefObject} from "react";
import "./floor.scss";
import {create} from "domain";
import {MapObject, Region} from "../../types";

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

    return (
        <div className="svgMap firstFloorMap" style={css} ref={refFloor}>

            {
                regions.map((region)=>{

                   return( <svg className="regions"
                                width={region.width}
                                height={region.height}
                                ref = {region.ref}
                                key ={region.name}


                        style={{
                            background: `url("${region.src}")`,
                            top: region.y,
                            left:region.x,
                        }}
                    >)
                           {region.description}
                           <foreignObject
                                   className="aboutSvg"
                                   x="0"
                                   y={region.height/2}
                                   width="180"
                                   height="160"
                               >
                                   <div>{region.description}</div>
                           </foreignObject>
                    </svg>)
            })}
        </div>
    );
};

export default Floor;
