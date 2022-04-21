import React, {RefObject, useRef, useState} from 'react';
import './App.css';
import Map from './componenets/map/index'
// @ts-ignore
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  const floors = [{
    number: "1",
    regions: [{
      name: 'diningRoom',
      description: 'Столовая',
      ref: useRef<SVGSVGElement>(null),
      cameraIds: ['', ''],
      src: '/img/floor1/diningRoom.svg',
      width: 465,
      height: 1417,
      x: 88.5,
      y: 1255
    }],
    ref: useRef<HTMLDivElement>(null),
    floorMap: {
      src: '/img/1floor.svg',
      width: 1235,
      height: 3027
    }
  }, {
    number: "2",
    regions: [{
      name: 'hallway',
      description: 'коридор',
      cameraIds: ['', ''],
      ref: useRef<SVGSVGElement>(null),
      src: '/img/floor2/hallway.svg',
      width: 110,
      height: 502,
      x: 179.5,
      y: 1497
    }, {
      name: 'hall',
      description: 'холл',
      cameraIds: ['', ''],
      ref: useRef<SVGSVGElement>(null),
      src: '/img/floor2/hall.svg',
      width: 271.5,
      height: 289,
      x: 201,
      y: 2652.5
    }],
    ref: useRef<HTMLDivElement>(null),
    floorMap: {
      src: '/img/2floor.svg',
      width: 2515,
      height: 3121
    }
  }, {
    number: "3",
    regions: [{
      name: 'hallway',
      description: 'Коридор',
      cameraIds: ['', ''],
      src: '/img/floor3/hallway.svg',
      ref: useRef<SVGSVGElement>(null),
      width: 110,
      height: 502,
      x: 179.5,
      y: 1502
    }, {
      name: 'office1208',
      description: '1208 кабинет',
      cameraIds: ['', ''],
      src: '/img/floor3/office1208.svg',
      ref: useRef<SVGSVGElement>(null),
      width: 140,
      height: 119,
      x: 640,
      y: 112
    }, {
      name: 'ladder',
      description: 'Лестница',
      cameraIds: ['', ''],
      src: `/img/floor3/ladder.svg`,
      ref: useRef<SVGSVGElement>(null),
      width: 293,
      height: 267,
      x: 371,
      y: 1254
    }],
    ref: useRef<HTMLDivElement>(null),
    floorMap: {
      src: '/img/3floor.svg',
      width: 2524,
      height: 3137
    }
  }]

  const campusName = "ITMO";


  const MAP_HEIGHT = 961;
  return (
    <div className="App">
      <Router>
        <Map mapHeight={MAP_HEIGHT} campusName={campusName} floors={floors}/>
      </Router>
    </div>
  );
}

export default App;
