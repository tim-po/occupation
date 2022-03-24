import React, { RefObject } from "react";
import "../floor.scss";
interface SecondFloorProps {
  css: { [key: string]: string };
  fill: string[];
  selectedRegion: string;
  refObj: { [key: string]: RefObject<SVGSVGElement> };
  REF_MAP: RefObject<HTMLDivElement>;
}
const SecondFloor = ({
  css,
  fill,
  selectedRegion,
  refObj,
  REF_MAP,
}: SecondFloorProps) => {
  return (
    <div className="svgMap secondFloorMap" style={css} ref={REF_MAP}>
      <svg
        className="regions hallway"
        width="110"
        height="502"
        viewBox="0 0 110 502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={refObj["Коридор"]}
      >
        <path
          d="M51.789 2.20551L2.68612 492.242L62.6961 499.275L107.828 8.27643L51.789 2.20551Z"
          fill="#46E40E"
          fill-opacity="0.2"
          stroke={selectedRegion === "Коридор" ? "red" : "#78EB50"}
          stroke-width="4"
        />
        <foreignObject
          className="aboutSvg"
          x="0"
          y="320"
          width="160"
          height="160"
        >
          <div>Коридор</div>
        </foreignObject>
      </svg>
      <svg
        className="regions hall"
        width="272"
        height="290"
        viewBox="0 0 272 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={refObj["Холл"]}
      >
        <path
          d="M2 287.5H269.5V2.5H2V287.5Z"
          fill="#46E40E"
          fill-opacity="0.2"
          stroke={selectedRegion === "Холл" ? "red" : "#78EB50"}
          stroke-width="4"
        />
        <foreignObject
          className="aboutSvg"
          x="0"
          y="320"
          width="160"
          height="160"
        >
          <div>Холл</div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SecondFloor;
