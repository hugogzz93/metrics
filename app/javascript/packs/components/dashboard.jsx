//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CircleGraph from './dashboardComponents/CircleGraph';
import LineGraph from './dashboardComponents/LineGraph';
import LongGraph from './dashboardComponents/LongGraph';
import Number from './dashboardComponents/Number';
import Picture from './dashboardComponents/Picture';
import Widget from './dashboardComponents/Widget';

class Dashboard extends Component<Object> {
  render() {
    const ContentNumbers = [
      {
          image: 'fa fa-thermomenter-empty',
          main: '48',
          suffix: 'bpm',
          subtext: 'TEMPERATURE',
          col: 4 
      }
    ]
    const ContentPictures = [
       { col: 2, image: 'fa fa-xing', subtext: 'PHOTOSYNTHESIS'},
       { col: 2, image: 'fa fa-bolt', subtext: 'GLYCOLISIS'},
       { col: 2, image: 'fa fa-stethoscope', subtext: 'RESPIRATION'},
       { col: 2, image: 'fa fa-dribbble', subtext: 'CHEMOSYNTH'},
     ]

     const ContentLineGraphs = [
       {col: 3, image: 'fa fa-thermometer-empty', main: '48', suffix: '%', subtext:'MUSCLE PERCENTAGE'},
       {col: 3, image: 'fa fa-heartbeat', main: '98', suffix: '%', subtext:'WATER PERCENTAGE'},
       {col: 3, image: 'fa fa-cuttlery', main: '61', suffix: 'kg', subtext:'BODY WEIGHT'},
       {col: 3, image: 'fa fa-user', main: '16', suffix: '%', subtext:'FAT PERCENTAGE'},
       {col: 3, image: 'fa fa-clock-o', main: '', suffix: 'Hrs', subtext:'SLEEP'}
     ]

     const CircleGraphs = [
       {col: 3, main: 'Protein', subtext: ''},
       {col: 3, main: 'Calories', subtext: ''},
       // {col: 3, image: 'fa fa-database', main: '680', suffix: 'kcal', subtext:'AVG. CONSUMPTION'},
       {col: 2, main: 'Mg', subtext: 'STRENGHT'},
       {col: 2, main: 'Zn', subtext: 'MUSCLES'},
       {col: 2, main: 'H20', subtext: 'GENERAL'},
       {col: 2, main: 'Ca', subtext: 'BONES & TEETH'},
       {col: 2, main: 'K', subtext: 'BlOOD PRESSURE'},
       {col: 2, main: 'Fe', subtext: 'OXYGEN'},
       {col: 2, main: 'A', subtext: 'SKIN'},
       {col: 2, main: 'B1', subtext: 'ENERGY'},
       {col: 2, main: 'B2', subtext: 'TISSUES'},
       {col: 2, main: 'B6', subtext: 'NERVOUS/ENERGY'},
       {col: 2, main: 'B12', subtext: 'NERVOUS SYSTEM'},
       {col: 2, main: 'C', subtext: 'GROWTH HORMONE'},
       {col: 2, main: 'D', subtext: 'TEETH & BONES'},
       {col: 2, main: 'E', subtext: 'CELL PROTECTION'},
       {col: 2, main: 'Vit K', subtext: 'INFLAMMATION'},
       {col: 2, main: 'FOLATE', subtext: 'ABSORBTION'},
       {col: 2, main: 'Gl', subtext: 'ENERGY'},
       {col: 2, main: 'Chol', subtext: 'ABSORBTION'}
     ]
  


    return (
      <div class="dashboard">
        <div class="dash-row row">
          <Widget col={ 4 } theme="dark">
            <Number {...ContentNumbers[0] }/>
          </Widget>
          <Widget col={ 2 } theme="light">
            <Picture {...ContentPictures[0] }/>
          </Widget>
          <Widget col={ 2 } theme="light">
            <Picture {...ContentPictures[1] }/>
          </Widget>
          <Widget col={ 2 } theme="light">
            <Picture {...ContentPictures[2] }/>
          </Widget>
          <Widget col={ 2 } theme="light">
            <Picture {...ContentPictures[3] }/>
          </Widget>
        </div>
        <div class="dash-row row">
          <Widget col={ 3 } theme="dark">
            <LineGraph {...ContentLineGraphs[0]}/>
          </Widget>
          <Widget col={ 3 } theme="dark">
            <LineGraph {...ContentLineGraphs[1]}/>
          </Widget>
          <Widget col={ 3 } theme="dark">
            <CircleGraph {...CircleGraphs[0]}/>
          </Widget>
          <Widget col={ 3 } theme="dark">
            <CircleGraph {...CircleGraphs[1]}/>
          </Widget>
        </div>
        <div class="dash-row row">
        </div>
        <div class="dash-row row">
        </div>
        <div class="dash-row row">
        </div>
        <div class="dash-row row">
        </div>
        <div class="dash-row row">
        </div>
        <div class="dash-row row">
        </div>
      </div>
    )
  }
}
export default Dashboard;
