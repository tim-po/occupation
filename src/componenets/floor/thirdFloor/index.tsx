import React, { RefObject } from "react";
import "../floor.scss";
interface FirstFloorProps {
  css: { [key: string]: string };
  fill: string[];
  selectedRegion: string;
  refObj: { [key: string]: RefObject<SVGSVGElement> };
  REF_MAP: RefObject<HTMLDivElement>;
}
const ThirdFloor = ({
  css,
  fill,
  selectedRegion,
  refObj,
  REF_MAP,
}: FirstFloorProps) => {
  return (
    <div className="svgMap thirdFloorMap" style={css} ref={REF_MAP}>
      <svg
        className="regions office1208"
        ref={refObj["1208 кабинет"]}
        width="141"
        height="119"
        viewBox="0 0 141 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.52 2.39018L2.37903 89.0033L118 116.094L138.101 28.512L21.52 2.39018Z"
          fill="#46E40E"
          fill-opacity="0.2"
          stroke={selectedRegion === "1208 кабинет" ? "red" : "#78EB50"}
          stroke-width="4"
        />
        <foreignObject
          className="aboutSvg"
          x="0"
          y="320"
          width="160"
          height="160"
        >
          <div>1208 кабинет</div>
        </foreignObject>
      </svg>
      <svg
        className="regions ladder"
        width="294"
        height="267"
        viewBox="0 0 294 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={refObj["Лестница"]}
      >
        <path
          d="M25.7993 2.17551L2.68478 241.682L270.184 264.835L291.332 26.8074L25.7993 2.17551Z"
          fill="#46E40E"
          fill-opacity="0.2"
          stroke={selectedRegion === "Лестница" ? "red" : "#78EB50"}
          stroke-width="4"
        />
        <foreignObject
          className="aboutSvg"
          x="0"
          y="320"
          width="160"
          height="160"
        >
          <div>Лестница</div>
        </foreignObject>
      </svg>
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

      {/*<svg*/}
      {/*    ref={refObj["Столовая"]}*/}
      {/*    width="465"*/}
      {/*    height="1417"*/}
      {/*    viewBox="0 0 465 1417"*/}
      {/*    fill="none"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*>*/}
      {/*    <path*/}
      {/*        d="M110.793 2.12815L462.827 26.3552L453.508 130.822L453.506 130.843L453.505 130.863L448.642 201.851L418.153 199.506L416.148 199.352L416.005 201.358L413.149 241.339L319.166 233.507L317 233.326V235.5V243.5V245.342L318.835 245.493L377.318 250.326L351.705 520.249L319.259 516.017L317.234 515.753L317.012 517.783L306.512 613.783L306.297 615.751L308.263 615.986L352.307 621.252L328.511 850.293L328.311 852.219L330.229 852.482L375.816 858.72L352.51 1088.8L352.507 1088.83L352.505 1088.85L328.653 1414.34L203.192 1404.17L234.49 1089.2L234.686 1087.22L232.714 1087.01L2.69142 1062.22L110.793 2.12815Z"*/}
      {/*        fill={fill[0]}*/}
      {/*        fillOpacity="0.2"*/}
      {/*        stroke={selectedRegion === "Столовая" ? "red" : "#78EB50"}*/}
      {/*        strokeWidth="4"*/}
      {/*    />*/}

      {/*</svg>*/}
    </div>
  );
};

export default ThirdFloor;
