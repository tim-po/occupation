import React, {RefObject} from 'react';
import FirstFloor from "../floor/firstFloor";
import SecondFloor from "../floor/secondFloor";
import ThirdFloor from "../floor/thirdFloor";
import Floor from "../floor/Floor";
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
type FloorType = {
    number: string,
    regions: Region[],
    ref: RefObject<HTMLDivElement>,
    floorMap: MapObject,
}

interface FloorControlsPropsI {
    floors: FloorType[];
    selectedFloor:string;
    setSelectedFloor: (ev: React.SetStateAction<string>) => void;
    setSelectedRegion: (ev:React.SetStateAction<string>) => void;
}

const FloorControls = ({floors, selectedFloor, setSelectedFloor, setSelectedRegion}:FloorControlsPropsI) => {
    const floorsNumber = floors.map(el => el.number)
    return (
<>

    <div className="floorButtonsBox">
        {floorsNumber.map((val) =>  (
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
            )
        )}
    </div>

</>
    );
};

export default FloorControls
