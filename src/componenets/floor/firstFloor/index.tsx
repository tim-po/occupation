import React, {useLayoutEffect, useRef} from "react";
interface FirstFloorProps {
  css: { [key: string]: string };
  fill: string[];
  selectedRegion: string;
  refObj: { [key : string]: any };
}
const FirstFloor = ({ css, fill, selectedRegion, refObj }: FirstFloorProps) => {




    return (
    <div className="svgMap" style={css} ref={refObj["Не столовая"]}>
      {/*// @ts-ignore*/}
      <svg
          ref={refObj["Столовая"]}
          onClick={()=> console.log(refObj)}
        width="465"
        height="1417"
        viewBox="0 0 465 1417"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M110.793 2.12815L462.827 26.3552L453.508 130.822L453.506 130.843L453.505 130.863L448.642 201.851L418.153 199.506L416.148 199.352L416.005 201.358L413.149 241.339L319.166 233.507L317 233.326V235.5V243.5V245.342L318.835 245.493L377.318 250.326L351.705 520.249L319.259 516.017L317.234 515.753L317.012 517.783L306.512 613.783L306.297 615.751L308.263 615.986L352.307 621.252L328.511 850.293L328.311 852.219L330.229 852.482L375.816 858.72L352.51 1088.8L352.507 1088.83L352.505 1088.85L328.653 1414.34L203.192 1404.17L234.49 1089.2L234.686 1087.22L232.714 1087.01L2.69142 1062.22L110.793 2.12815Z"
          fill={fill[0]}
          fillOpacity="0.2"
          stroke={selectedRegion === "Столовая" ? "red" : "#78EB50"}
          strokeWidth="4"
        />
        <foreignObject
          className="aboutSvg"
          x="0"
          y="320"
          width="160"
          height="160"
        >
          <div>Столовая</div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default FirstFloor;
