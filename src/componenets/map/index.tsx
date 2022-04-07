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
}

// CampusMap
function Map({ campusName,
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

      {/*TODO: move florControls to new component*/}
      <div className={"mapControls"}>
      <FloorControls selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} floors={floors} setSelectedRegion={setSelectedRegion}/>
      <MapControl  zoom ={zoom} setZoom ={setZoom} selectedFloor={selectedFloor} setSelectedRegion={setSelectedRegion} floors={floors}/>
      <RegionsControls setZoom ={setZoom} floors={floors} selectedFloor={selectedFloor} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      </div>
      <Floor floorMap={floors[+selectedFloor -1].floorMap} number={selectedFloor} refFloor={floors[+selectedFloor-1].ref} regions={floors[+selectedFloor -1].regions}/>



      {/*TODO: execute flore select through map props*/}
      {/*florControls start*/}

        {/*florControls end*/}

        {/*TODO: move mapControls to new component*/}
        {/*mapControls start*/}
        {/*<div className="zoomButtonsBox">*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      if (zoomMap < 1) {*/}
        {/*        setZoomMap(zoomMap + 0.1);*/}
        {/*      }*/}
        {/*    }}*/}
        {/*    className={"buttonsItem "}*/}
        {/*  >*/}
        {/*    +*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    onClick={() => (zoomMap > 0.2 ? setZoomMap(zoomMap - 0.1) : "")}*/}
        {/*    className="buttonsItem"*/}
        {/*  >*/}
        {/*    -*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/*<div className="resetButtonBox">*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      REF_MAP!.current!.style!.transform = `scale(${*/}
        {/*        MAP_HEIGHT / SVG_MAP_HEIGHT[+selectedFloor - 1]*/}
        {/*      })`;*/}
        {/*      setZoomMap(MAP_HEIGHT / SVG_MAP_HEIGHT[+selectedFloor - 1]);*/}
        {/*      setSelectedRegion("")*/}
        {/*    }}*/}
        {/*    className={"buttonsItem "}*/}
        {/*  >*/}
        {/*    0*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/* mapControls end*/}

        {/*TODO: move regionControls to new component*/}
        {/*regionControls start*/}
        {/*<div className="regionsList">*/}
        {/*  {regionsName[+selectedFloor - 1].map((el) => {*/}
        {/*    return (*/}
        {/*      <button*/}
        {/*        className={"regionsListItem "  + (selectedRegion === el && "active")}*/}
        {/*        key={el}*/}
        {/*        onClick={() => {*/}
        {/*          setSelectedRegion(el);*/}

        {/*          let currentScale =*/}
        {/*            MAP_HEIGHT /*/}
        {/*            refObj[+selectedFloor - 1][el]!.current!.height!.baseVal!*/}
        {/*              .value;*/}
        {/*          currentScale = currentScale < 1 ? currentScale : 1;*/}
        {/*          console.log(currentScale)*/}
        {/*          REF_MAP!.current!.style.transform = `scale(${currentScale})`;*/}

        {/*          setZoomMap(currentScale);*/}
        {/*          refObj[+selectedFloor - 1][el]!.current!.scrollIntoView({*/}
        {/*            inline: "center",*/}
        {/*            block: "center"*/}
        {/*            // behavior: "smooth",*/}
        {/*          });*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        {el}*/}
        {/*      </button>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
        {/*regionControls end*/}
      </div>
    // </div>
  );
}

export default Map;
