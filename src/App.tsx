import React, {RefObject, useRef, useState} from 'react';
import './App.css';
import Map from './componenets/map/index'
import floor1 from './img/1floor.svg'
import floor2 from './img/2floor.svg'
import floor3 from './img/3floor.svg'
import hallway from './img/hallway.svg'
import diningRoom from './img/diningRoom.svg'



function App() {
    const floors = [{
        number: "1",
        regions: [{
            name: 'Столовая',
            description: 'Столовая',
            ref: useRef<SVGSVGElement>(null),
            cameraIds: ['', ''],
            src: diningRoom,
            width:465,
            height:1417,
            x: 88.5,
            y: 1255
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:floor1,
            width:1235,
            height:3027
        }
    }, {
        number: "2",
        regions: [{
            name: 'коридор',
            description: 'коридор',
            cameraIds: ['', ''],
            ref: useRef<SVGSVGElement>(null),
            src: hallway,
            width:110,
            height:502,
            x: 179.5,
            y: 1497
        }, {
            name: 'холл',
            description: 'холл',
            cameraIds: ['', ''],
            ref: useRef<SVGSVGElement>(null),
            src: '',
            width:12,
            height:12,
            x: 1,
            y: 1
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:floor2,
            width:1235,
            height:3027
        }
    }, {
        number: "3",
        regions: [{
            name: 'Коридор',
            description: 'Коридор',
            cameraIds: ['', ''],
            src: hallway,
            ref: useRef<SVGSVGElement>(null),
            width:12,
            height:12,
            x: 1,
            y: 1
        }, {
            name: '1208 кабинет',
            description: '1208 кабинет',
            cameraIds: ['', ''],
            src: '',
            ref: useRef<SVGSVGElement>(null),
            width:12,
            height:12,
            x: 1,
            y: 1
        }, {
            name: 'Лестница',
            description: 'Лестница',
            cameraIds: ['', ''],
            src: `../../../img/hallway.svg`,
            ref: useRef<SVGSVGElement>(null),
            width:110,
            height:502,
            x: 1,
            y: 1
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:floor3,
            width:1235,
            height:3027
        }
    }, {
        number: "4",
        regions: [{
            name: 'Столовая',
            description: '',
            cameraIds: ['', ''],
            ref: useRef<SVGSVGElement>(null),
            src: '',
            width:12,
            height:12,
            x: 1,
            y: 1
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:floor1,
            width:1235,
            height:3027
        }
    }]

    const campusName = "ITMO";

    const [selectedFloor, setSelectedFloor] = useState<string>("1");
    const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (
    <div className="App">

      <Map campusName={campusName} floors={floors} selectedFloor={selectedFloor} setSelectedFloor = {setSelectedFloor} setSelectedRegion = {setSelectedRegion}  selectedRegion={selectedRegion}/>
    </div>
  );
}

export default App;
