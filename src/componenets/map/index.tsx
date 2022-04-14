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

    <div
      className={"map"}
      // onDoubleClick={() => {
      //   if (zoomMap < 1) {
      //     setZoomMap(zoomMap + 0.05);
      //   }
      // }}
    >
      <div className={"mapControls"}>
      <MapControl mapHeight ={mapHeight} zoom ={zoom} setZoom ={setZoom} floors={floors}/>
      </div>
     <div className={"sideMenu"}>
        <FloorControls floors={floors}/>
        <RegionsControls mapHeight ={mapHeight} setZoom ={setZoom} floors={floors}/>
     </div>

        <Routes >
        <Route path = "/" element={
          <Floor
              floorMap={floors[+floor -1].floorMap}
              number={floor}
              refFloor={floors[+floor-1].ref}
              regions={floors[+floor -1].regions}
          />
        }
             />
      </Routes>

      </div>
  );
}

export default Map;
