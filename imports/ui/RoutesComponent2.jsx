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
        <h3>continental fares table</h3>
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
            <td>WINDHOEK</td>
            <td>JOHANNESBURG</td>
            <td>04:30hours</td>
            <td>07:45 p.m</td>
            <td>K185-K250</td>
          </tr>

          <tr>
            <td>TUNIS</td>
            <td>NAIROBI</td>
            <td>04:00hours</td>
            <td>24 hrs or more</td>
            <td>K500-K600</td>
          </tr>
          <tr>
            <td>DAR ES SALAAM</td>
            <td>CAPE TOWN</td>
            <td>07.00hours</td>
            <td>24 hrs or more</td>
            <td>K300-K460</td>

          </tr>
          <tr>
            <td>KIGALI</td>
            <td>KUMASI</td>
            <td>16.00hours</td>
            <td>10:00 a.m</td>
            <td>K456-K230</td>
          </tr>

          <tr>
            <td>LIBREVILLE</td>
            <td>LAGOS</td>
            <td>8.00hours</td>
            <td>03:53 p.m</td>
            <td>K134-K349</td>

          </tr>

          <tr>
            <td>GABORONE</td>
            <td>ACCRA</td>
            <td>09.00hours</td>
            <td>15:00 a.m</td>
            <td>K633-K984</td>
          </tr>

          <tr>
            <td>ALGIERS</td>
            <td>GRAHAMSTOWN</td>
            <td>15:00hours</td>
            <td>09:00 p.m</td>
            <td>K123-K638</td>

          </tr>

          <tr>
            <td>ASMARA</td>
            <td>WESTERN CAPE</td>
            <td>12:00hours</td>
            <td>06:00 a.m</td>
            <td>K187-K237</td>
          </tr>

          <tr>
            <td>LUANDA</td>
            <td>PORT-NOVO</td>
            <td>10:00hours</td>
            <td>03:00 a.m</td>
            <td>K222-K375</td>
          </tr>

          <tr>
            <td>CAIRO</td>
            <td>ADDIS ABABA</td>
            <td>06:00hours</td>
            <td>12: 00p.m</td>
            <td>K185-K200</td>
          </tr>

          <tr>
            <td>OUAGADOUGOU</td>
            <td>YAOUNDE</td>
            <td>08:00hours</td>
            <td>07:00p.m</td>
            <td>K150-K185</td>
          </tr>

          <tr>
            <td>ANTANANARIVO</td>
            <td>KHARTOUM</td>
            <td>07:00hours</td>
            <td>06:00a.m</td>
            <td>K230-K254</td>
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
