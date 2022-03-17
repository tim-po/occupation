import "./index.scss";
import { useRef, useState } from "react";
import FirstFloor from "../floor/firstFloor";

function Map() {
  const floors = ["1", "2", "3"];
  // const zoom = [0.2, 0.4, 0.6, 0.8, 1, 1.3, 1.6, 1.9, 2.1, 2.5];

  const regionsName = [["Столовая", "Не столовая"], [], []];
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [zoomMap, setZoomMap] = useState(1116 / 3027);

  const cssMap = {
    transform: `scale(${zoomMap})`,
  };
  const refObj = {
    Столовая: useRef<HTMLOrSVGElement>(null),
    "Не столовая": useRef<HTMLDivElement>(null),
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
              // @ts-ignore
              refObj["Не столовая"].current.style.transform = `scale(${
                1116 / 3027
              })`;
              setZoomMap(1116 / 3027);
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
                    // @ts-ignore
                    1116 / (refObj[el].current.height?.baseVal?.value || 3027);
                  // @ts-ignore
                  refObj[
                    "Не столовая"
                  ].current.style.transform = `scale(${currentScale})`;

                  setZoomMap(currentScale);
                  // @ts-ignore
                  refObj[el].current.scrollIntoView({
                    inline: "center",
                    behavior: "smooth",
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
