import './index.scss'
import {Radio, RadioChangeEvent} from 'antd';
import {useState} from "react";



function Map() {
  const floors = ['1', '2', '3', '4']
  const [selectedFloor, setSelectedFloor] = useState(floors[0])
  const onFloorSelect = (e: RadioChangeEvent) => {
    setSelectedFloor(e.target.value)
  }

  return (
    <div className={'map'}>
      <div className={'mapControls'}>
        <Radio.Group
          options={floors}
          onChange={onFloorSelect}
          value={selectedFloor}
          optionType="button"
        />
      </div>
    </div>
  );
}

export default Map;