import "./index.scss";
import React, {createRef, useEffect, useRef, useState} from "react";
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
function Map({floors}: CampusMapProps) {
  const [zoom, setZoom] = useState(1)
  const mapHeight = window.innerHeight;
  const [searchParams] = useSearchParams()
  const canvasRef = React.createRef<HTMLDivElement>()
  const floor = searchParams.get('floor') || '1'

    return (
<TransformWrapper
    initialScale={mapHeight/floors[+floor -1].floorMap.height}
    minScale={0.1}
    maxScale={1.8}
    centerOnInit={true}
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
                  className={"mapContainer"}
                >
                    <Floor floorMap={floors[+floor -1].floorMap}
                             number={floor}
                             refFloor={floors[+floor-1].ref}
                             regions={floors[+floor -1].regions}
                    />
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
