import "./index.scss";
import React, {RefObject, useEffect, useRef, useState} from "react";
import FirstFloor from "../floor/firstFloor";
import SecondFloor from "../floor/secondFloor";
import ThirdFloor from "../floor/thirdFloor";
import FloorControls from "../controls/FloorControls";
import Floor from "../floor/Floor";
import MapControl from "../controls/mapControl";
import RegionsControls from "../controls/regionsControls";

type MapObject = {
  src: string // background map image
  width: number,
  height: number,
}
type Region = {
  name: string, // works kinda like id
  description: string,
  cameraIds: string[],
  ref: RefObject<SVGSVGElement>,
  src: string // region map image
  width: number,
  height: number,
  x: number, // in percent of map width
  y: number, // in percent of map heights
}
type Floor = {
  number: string,
  regions: Region[],
  ref: RefObject<HTMLDivElement>,
  floorMap: MapObject,
}
type CampusMapProps = {
  campusName: string,
  floors: Floor[],
  selectedFloor: string ,//| undefined,
  selectedRegion: string ,//| undefined, // region name
  setSelectedFloor: ((ev: React.SetStateAction<string>) => void),
  setSelectedRegion: ((ev: React.SetStateAction<string>) => void),
  mapHeight: number
}

// CampusMap
function Map({ campusName,
               mapHeight,
               floors,
               selectedFloor,
    setSelectedFloor,
    setSelectedRegion,
             selectedRegion}: CampusMapProps) {
  const [zoom, setZoom] = useState(1)



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
        <FloorControls selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} floors={floors} setSelectedRegion={setSelectedRegion}/>
        <MapControl mapHeight ={mapHeight} zoom ={zoom} setZoom ={setZoom} selectedFloor={selectedFloor} setSelectedRegion={setSelectedRegion} floors={floors}/>
        <RegionsControls mapHeight ={mapHeight} setZoom ={setZoom} floors={floors} selectedFloor={selectedFloor} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      </div>

      <Floor floorMap={floors[+selectedFloor -1].floorMap} number={selectedFloor} refFloor={floors[+selectedFloor-1].ref} regions={floors[+selectedFloor -1].regions}/>


      </div>
    // </div>
  );
}

export default Map;
