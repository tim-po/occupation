import "./index.scss";
import { RefObject, useRef, useState } from "react";
import FirstFloor from "../floor/firstFloor";
import SecondFloor from "../floor/secondFloor";
import ThirdFloor from "../floor/thirdFloor";

type MapObject = {
  src: string // background map image
  width: number,
  height: number,
}
type Region = {
  name: string, // works kinda like id
  description: string,
  cameraIds: string[],
  src: string // region map image
  width: number,
  height: number,
  x: number, // in percent of map width
  y: number, // in percent of map heights
}
type Floor = {
  number: string,
  regions: Region[],
  ref: RefObject<SVGSVGElement>,
  floorMap: MapObject,
}
type CampusMapProps = {
  campusName: string,
  floors: Floor[],
  selectedFloor?: string | undefined,
  selectedRegion?: string | undefined, // region name
}

// CampusMap
function Map() {
  const floors = ["1", "2", "3"];
  // const zoom = [0.2, 0.4, 0.6, 0.8, 1, 1.3, 1.6, 1.9, 2.1, 2.5];
  const MAP_HEIGHT = 921;
  const SVG_MAP_HEIGHT = [3027, 3121, 3137];
  const REF_MAP = useRef<HTMLDivElement>(null);
  const regionsName = [
    ["Столовая"],
    ["Коридор", "Холл"],
    ["1208 кабинет", "Лестница", "Коридор"],
  ];
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [zoomMap, setZoomMap] = useState(MAP_HEIGHT / SVG_MAP_HEIGHT[+selectedFloor - 1]);

  const cssMap = {
    transform: `scale(${zoomMap})`,
  };
  interface refI {
    [key: string]: RefObject<SVGSVGElement>;
  }
  const refObj: refI[] = [
    {
      Столовая: useRef<SVGSVGElement>(null),
    },
    {
      Коридор: useRef<SVGSVGElement>(null),
      Холл: useRef<SVGSVGElement>(null),
    },
    {
      Коридор: useRef<SVGSVGElement>(null),
      "1208 кабинет": useRef<SVGSVGElement>(null),
      Лестница: useRef<SVGSVGElement>(null),
    },
  ];

  let fill = ["#46E40E", "#46E40E"];
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
      {/*florControls start*/}
      {/*TODO: execute flore select through map props*/}
      {selectedFloor === "1" && (
        <FirstFloor
          refObj={refObj[0]}
          selectedRegion={selectedRegion}
          css={cssMap}
          fill={fill}
          REF_MAP={REF_MAP}
        />
      )}
      {selectedFloor === "2" && (
        <SecondFloor
          refObj={refObj[1]}
          selectedRegion={selectedRegion}
          css={cssMap}
          fill={fill}
          REF_MAP={REF_MAP}
        />
      )}
      {selectedFloor === "3" && (
        <ThirdFloor
          refObj={refObj[2]}
          selectedRegion={selectedRegion}
          css={cssMap}
          fill={fill}
          REF_MAP={REF_MAP}
        />
      )}
      <div className={"mapControls"}>
        <div className="floorButtonsBox">
          {floors.map((val) => {
            return (
              <button
                key={val}
                onClick={() => {
                  setSelectedFloor(val)
                  setSelectedRegion("")
                }}
                className={
                  "buttonsItem " + (selectedFloor === val ? "active" : "")
                }
              >
                {val}
              </button>
            );
          })}
        </div>
        {/*florControls end*/}

        {/*TODO: move mapControls to new component*/}
        {/*mapControls start*/}
        <div className="zoomButtonsBox">
          <button
            onClick={() => {
              if (zoomMap < 1) {
                setZoomMap(zoomMap + 0.1);
              }
            }}
            className={"buttonsItem "}
          >
            +
          </button>
          <button
            onClick={() => (zoomMap > 0.2 ? setZoomMap(zoomMap - 0.1) : "")}
            className="buttonsItem"
          >
            -
          </button>
        </div>
        <div className="resetButtonBox">
          <button
            onClick={() => {
              REF_MAP!.current!.style!.transform = `scale(${
                MAP_HEIGHT / SVG_MAP_HEIGHT[+selectedFloor - 1]
              })`;
              setZoomMap(MAP_HEIGHT / SVG_MAP_HEIGHT[+selectedFloor - 1]);
              setSelectedRegion("")
            }}
            className={"buttonsItem "}
          >
            0
          </button>
        </div>
        {/* mapControls end*/}

        {/*TODO: move regionControls to new component*/}
        {/*regionControls start*/}
        <div className="regionsList">
          {regionsName[+selectedFloor - 1].map((el) => {
            return (
              <button
                className={"regionsListItem "  + (selectedRegion === el && "active")}
                key={el}
                onClick={() => {
                  setSelectedRegion(el);

                  let currentScale =
                    MAP_HEIGHT /
                    refObj[+selectedFloor - 1][el]!.current!.height!.baseVal!
                      .value;
                  currentScale = currentScale < 1 ? currentScale : 1;
                  console.log(currentScale)
                  REF_MAP!.current!.style.transform = `scale(${currentScale})`;

                  setZoomMap(currentScale);
                  refObj[+selectedFloor - 1][el]!.current!.scrollIntoView({
                    inline: "center",
                    block: "center"
                    // behavior: "smooth",
                  });
                }}
              >
                {el}
              </button>
            );
          })}
        </div>
        {/*regionControls end*/}
      </div>
    </div>
  );
}

export default Map;
