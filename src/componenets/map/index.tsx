import "./index.scss";
import React, {createRef, useRef, useState} from "react";
import FloorControls from "../controls/FloorControls";
import Floor from "../floor/Floor";
import MapControl from "../controls/mapControl";
import RegionsControls from "../controls/regionsControls";
import {
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';
import {FloorType} from "../../types";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

type CampusMapProps = {
  campusName: string,
  floors: FloorType[],
  mapHeight: number
}

// CampusMap
function Map({ campusName,
               // mapHeight,
               floors,
               }: CampusMapProps) {
  const [zoom, setZoom] = useState(1)
  const mapHeight = window.innerHeight;
  const [searchParams]= useSearchParams()
  const floor = searchParams.get('floor') || '1'

    return (
<TransformWrapper
    initialScale={0.5}
    initialPositionX={0}
    initialPositionY={0}
    minScale={0.1}
    maxScale={1.8}
    // centerOnInit={true}
    wheel={{
        disabled:true
    }}
    alignmentAnimation={{sizeX:1000}}
    doubleClick={{
        step:0.4,
        animationTime:1
    }}

>
        {({ zoomIn, zoomOut, resetTransform, zoomToElement, ...rest }:any) => (
            <React.Fragment>
                <div
                  className={"map"}
                >


                <TransformComponent
                    wrapperStyle = {{
                            width: "100%",
                            height: "100%"
                        }}
                        >
                    <Floor floorMap={floors[+floor -1].floorMap}
                             number={floor}
                             refFloor={floors[+floor-1].ref}
                             regions={floors[+floor -1].regions}
                    />
                </TransformComponent>
                    <div className={"mapControls"}>
                        <MapControl zoomIn ={zoomIn} zoomOut = {zoomOut} resetTransform = {resetTransform}/>
                    </div>
                    <div className={"sideMenu"}>
                        <FloorControls floors={floors}/>
                        <RegionsControls zoomToElement = {zoomToElement} floors={floors}/>
                    </div>
                </div>
            </React.Fragment>
        )}

      {/*</div>*/}
    </TransformWrapper>
  );
}

export default Map;
