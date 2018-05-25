import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/imports/ui/Navbar';
import Footer from '/imports/ui/Footer.jsx';
import { Row, Input, Table } from 'react-materialize';
import Routes from '/imports/ui/RoutesComponent.jsx';


export default  class RoutesForm2 extends Component{
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        <h3>international fares table</h3>
        <h5 className="header-two">for local fares and bus schedules

        <a
          href="/Routes"
          id="RoutesForm2"> Click here</a></h5>

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
            <td>MALAWI</td>
            <td>04:30hours</td>
            <td>K185</td>
            <td>K185</td>
          </tr>

          <tr>
            <td>LIVINGSTONE</td>
            <td>ZIMBABWE</td>
            <td>04:00hours</td>
            <td>K170</td>
            <td>K185</td>
          </tr>
          <tr>
            <td>DRC</td>
            <td>NDOLA</td>
            <td>07.00hours</td>
            <td>K90</td>
            <td>K185</td>

          </tr>
          <tr>
            <td>LIVINGSTONE</td>
            <td>NAMIBIA</td>
            <td>16.00hours</td>
            <td>K1270</td>
            <td>K185</td>
          </tr>

          <tr>
            <td>ANGOLAs</td>
            <td>SOLWEZI</td>
            <td>8.00hours</td>
            <td>K150</td>
            <td>K185</td>

          </tr>

          <tr>
            <td>TANZANIA</td>
            <td>MANSA</td>
            <td>09.00hours</td>
            <td>K100</td>
            <td>K185</td>
          </tr>

          <tr>
            <td>CHOMA</td>
            <td>ZIMBABWE</td>
            <td>15:00hours</td>
            <td>K150</td>
            <td>K185</td>

          </tr>

          <tr>
            <td>SIAVONGA</td>
            <td>BOTSWANA</td>
            <td>12:00hours</td>
            <td>K120</td>
            <td>K185</td>
          </tr>


          <tr>
            <td>CHILLIABOMBWE</td>
            <td>DRC</td>
            <td>10:00hours</td>
            <td>K260</td>
            <td>K185</td>
          </tr>

          <tr>
            <td>KASAMA</td>
            <td>NAMIBAIA</td>
            <td>15:00hours</td>
            <td>K150</td>
            <td>K185</td>
          </tr>

          <tr>
            <td>LUSAKA</td>
            <td>TANZANIA</td>
            <td>15:00hours</td>
            <td>K150</td>
            <td>K185</td>
          </tr>
          <tr>
            <td>kITWE</td>
            <td>SOUTHAFRICA</td>
            <td>07.00hours</td>
            <td>K190</td>
            <td>K185</td>
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
