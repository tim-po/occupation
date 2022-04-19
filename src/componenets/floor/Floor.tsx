import React, { RefObject} from "react";
import "./floor.scss";
import SVG from 'react-inlinesvg';

import {MapObject, Region} from "../../types";
import {useSearchParams} from "react-router-dom";
import {TransformComponent} from "react-zoom-pan-pinch";

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
        <TransformComponent>
        <div className="svgMap" style={css} ref={refFloor}>

            {
                regions.map((region) => {
                   return(
                       <div className={'regions ' + (currentRegion === region.name && 'active')}
                               width={region.width}
                               id={region.name}
                               height={region.height}
                               //@ts-ignore
                               ref = {region.ref}
                               key ={region.name}
                               style={{
                                   top: region.y,
                                   left:region.x,
                               }}>

                       <SVG
                        src={region.src}
                        description={region.description}
                       />
                                      <div
                                              className="aboutSvg_container"
                                              // x="0"
                                              // y={region.height/2}
                                              // width="180"
                                              // height="160"
                                          >
                                              <div className= "aboutSvg">{region.description}</div>
                                      </div>
                   </div>)
                })
            }

        </div>
        </TransformComponent>
    );
};

export default Floor;

