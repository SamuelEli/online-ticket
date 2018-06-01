import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/imports/ui/Navbar';
import Footer from '/imports/ui/Footer.jsx';
import { Row, Input, Table } from 'react-materialize';
import RoutesForm2 from '/imports/ui/RoutesComponent2.jsx';


export default  class RoutesForm extends Component{
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        {/* <br/> */}
          <h3>local fares table</h3>
          <h5 className="header-two"> For international fares and bus schedules
            <a
              href="/RoutesForm2"
              id="RoutesForm2"> click here</a></h5>

              {/* <RoutesForm2/> */}
        <div>
      <Table className="sarah">
        <thead>
          <tr>
            <th data-field="from">FROM</th>
            <th data-field="to">TO</th>
            <th data-field="time">DEPARTURE TIME</th>
            <th data-field="fares">Arrival time</th>
            <th data-field="fares">FARES</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>LUSAKA</td>
            <td>SOLWEZI</td>
            <td>04:30hours</td>
            <td>07:45p.m</td>
            <td>K85-100</td>
          </tr>

          <tr>
            <td>LIVINGSTONE</td>
            <td>KITWE</td>
            <td>05:00hours</td>
            <td>16:00hours</td>
            <td>K90-K120</td>
          </tr>
          <tr>
            <td>KITWE</td>
            <td>NDOLA</td>
            <td>07:00hours</td>
            <td>20:hours</td>
            <td>K120-130</td>
          </tr>
          <tr>
            <td>LIVINGSTONE</td>
            <td>CHIPATA</td>
            <td>16:00hours</td>
            <td>06:00hours</td>
            <td>K100-K120</td>
          </tr>

          <tr>
            <td>SOLWEZI</td>
            <td>LUANGWA</td>
            <td>8:00hours</td>
            <td>18:00hours</td>
            <td>K100-K140</td>
          </tr>

          <tr>
            <td>CHINGOLA</td>
            <td>MANSA</td>
            <td>02:00hours</td>
            <td>08:00hours</td>
            <td>K85-K100</td>
          </tr>

          <tr>
            <td>MPIKA</td>
            <td>CHOMA</td>
            <td>15:00hours</td>
            <td>23:00hours</td>
            <td>K85-K90</td>

          </tr>

          <tr>
            <td>SIAVONGA</td>
            <td>MONGU</td>
            <td>12:00hours</td>
            <td>08:00hours</td>
            <td>K95-K160</td>
          </tr>


          <tr>
            <td>KAFUE</td>
            <td>CHILILABOMBWE</td>
            <td>10:00hours</td>
            <td>24:00hour</td>
            <td>K100-K160</td>
          </tr>

          <tr>
            <td>MAZABUKA</td>
            <td>KASAMA</td>
            <td>19:00hours</td>
            <td>13:00hours</td>
            <td>K110-K170</td>
          </tr>

          <tr>
            <td>KABWE</td>
            <td>MONZE</td>
            <td>17:00hours</td>
            <td>09:hpurs</td>
            <td>K160-K190</td>
          </tr>
          <tr>
            <td>kITWE</td>
            <td>NDOLA</td>
            <td>07:00hours</td>
            <td>21:45</td>
            <td>K 200-K250</td>
          </tr>
        </tbody>
      </Table>
     </div>
       <br/>
        <br/>


         <div>
           <Footer/>
         </div>
      </div>
    );
  }
}
