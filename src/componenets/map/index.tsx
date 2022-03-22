import "./index.scss";
import { RefObject, useRef, useState } from "react";
import FirstFloor from "../floor/firstFloor";

function Map() {
  const floors = ["1", "2", "3"];
  // const zoom = [0.2, 0.4, 0.6, 0.8, 1, 1.3, 1.6, 1.9, 2.1, 2.5];
  const MAP_HEIGHT = 1116;
  const SVG_MAP_HEIGHT = 3027;
  const REF_MAP = useRef<HTMLDivElement>(null);
  const regionsName = [["Столовая"], [], []];
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [zoomMap, setZoomMap] = useState(MAP_HEIGHT / SVG_MAP_HEIGHT);

  const cssMap = {
    transform: `scale(${zoomMap})`,
  };
  interface refI {
    [key: string]: RefObject<SVGSVGElement>;
  }
  const refObj: refI = {
    Столовая: useRef<SVGSVGElement>(null),
  };

  let fill = ["#46E40E", "#46E40E"];
  return (
    <div
      className={"map"}
      onDoubleClick={() => {
        if (zoomMap < 2) {
          setZoomMap(zoomMap + 0.1);
        }
      }}
    >
      {selectedFloor === "1" && (
        <FirstFloor
          refObj={refObj}
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
                onClick={() => setSelectedFloor(val)}
                className={
                  "buttonsItem " + (selectedFloor === val ? "active" : "")
                }
              >
                {val}
              </button>
            );
          })}
        </div>

        <div className="zoomButtonsBox">
          <button
            onClick={() => {
              if (zoomMap < 2) {
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
                MAP_HEIGHT / SVG_MAP_HEIGHT
              })`;
              setZoomMap(MAP_HEIGHT / SVG_MAP_HEIGHT);
            }}
            className={"buttonsItem "}
          >
            0
          </button>
        </div>
        <div className="regionsList">
          {regionsName[+selectedFloor - 1].map((el) => {
            return (
              <button
                className="regionsListItem"
                key={el}
                onClick={() => {
                  setSelectedRegion(el);

                  let currentScale =
                    MAP_HEIGHT / refObj[el]!.current!.height!.baseVal!.value;
                  REF_MAP!.current!.style.transform = `scale(${currentScale})`;

                  setZoomMap(currentScale);
                  refObj[el]!.current!.scrollIntoView({
                    inline: "center",
                    // behavior: "smooth",
                  });
                }}
              >
                {el}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Map;
