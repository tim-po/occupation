import {RefObject} from "react";

export type MapObject = {
    src: string // background map image
    width: number,
    height: number,
}
export type Region = {
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
export type FloorType = {
    number: string,
    regions: Region[],
    ref: RefObject<HTMLDivElement>,
    floorMap: MapObject,
}

type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
    text: string;
    showSeriesCount: boolean;
    seriesCountSize: SeriesSize;
}

