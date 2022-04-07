import React, {RefObject, useRef, useState} from 'react';
import './App.css';
import Map from './componenets/map/index'

function App() {
    const floors = [{
        number: "1",
        regions: [{
            name: 'Столовая',
            description: 'Столовая',
            ref: useRef<SVGSVGElement>(null),
            cameraIds: ['', ''],
            src: 'http://localhost:3000/static/media/diningRoom.e78321eea4a6bb337731.svg',
            width:465,
            height:1417,
            x: 88.5,
            y: 1255
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:'http://localhost:3000/static/media/1floor.b6924801dccd3cbbff09.svg',
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
            src: '../../img/hallway.svg',
            width:12,
            height:12,
            x: 1,
            y: 1
        }, {
            name: 'холл',
            description: 'холл',
            cameraIds: ['', ''],
            ref: useRef<SVGSVGElement>(null),
            src: '../../img/hallway.svg',
            width:12,
            height:12,
            x: 1,
            y: 1
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:'http://localhost:3000/static/media/2floor.42da2d09fdd7ae1ea272.svg',
            width:1235,
            height:3027
        }
    }, {
        number: "3",
        regions: [{
            name: 'Коридор',
            description: 'Коридор',
            cameraIds: ['', ''],
            src: '',
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
            src: '',
            ref: useRef<SVGSVGElement>(null),
            width:12,
            height:12,
            x: 1,
            y: 1
        }],
        ref:useRef<HTMLDivElement>(null),
        floorMap:{
            src:'http://localhost:3000/static/media/3floor.bc5f83f7e91e190bb25a.svg',
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
            src:'./img/1floor.svg',
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
