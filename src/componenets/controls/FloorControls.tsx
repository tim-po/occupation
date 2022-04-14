import React, {RefObject} from 'react';
import {Link, NavLink, useSearchParams} from "react-router-dom";
import {FloorType} from "../../types";


type FloorControlsPropsI = {
    floors: FloorType[];
}

const FloorControls = ({floors}:FloorControlsPropsI) => {
    const floorsNumber = floors.map(el => el.number)
    const [search] = useSearchParams();
    const floor = search.get('floor')
    return (
<>
    <h1 className={'title'}>Выбор этажа</h1>
    <div className="floorButtonsBox">

        {floorsNumber.map((val) =>  (
            <Link to={`?floor=${val}`} key={val} className={"buttonsItem " + ( floor === val ? "active" : "")}>
                    {val}
            </Link>
            )
        )}
    </div>

</>
    );
};

export default FloorControls
