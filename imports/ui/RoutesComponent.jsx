import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/imports/ui/Navbar';
import Footer from '/imports/ui/Footer.jsx';
import { Row, Input, Table } from 'react-materialize';


export default  class RoutesForm extends Component{
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
      <Table className="sarah">
        <thead>
          <tr>
            <th data-field="from">FROM</th>
            <th data-field="to">TO</th>
            <th data-field="time">TIME</th>
            <th data-field="fares">FARES</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>LUSAKA</td>
            <td>SOLWEZI</td>
            <td>04:30hours</td>
            <td>K85</td>
          </tr>

          <tr>
            <td>LIVINGSTONE</td>
            <td>KITWE</td>
            <td>04:00hours</td>
            <td>K70</td>
          </tr>
          <tr>
            <td>KITWE</td>
            <td>NDOLA</td>
            <td>07.00hours</td>
            <td>K90</td>
          </tr>
          <tr>
            <td>LIVINGSTONE</td>
            <td>CHAIPATA</td>
            <td>16.00hours</td>
            <td>K70</td>
          </tr>

          <tr>
            <td>SOLWEZI</td>
            <td>LUANGWA</td>
            <td>8.00hours</td>
            <td>k150</td>
          </tr>

          <tr>
            <td>CHINGOLA</td>
            <td>MANSA</td>
            <td>09.00hours</td>
            <td>k100</td>
          </tr>

          <tr>
            <td>MPIKA</td>
            <td>CHOMA</td>
            <td>15:00hours</td>
            <td>k50</td>

          </tr>

          <tr>
            <td>SIAVONGA</td>
            <td>MONGO</td>
            <td>12:00hours</td>
            <td>k120</td>
          </tr>


          <tr>
            <td>KAFUE</td>
            <td>CHILLIABOMBWE</td>
            <td>10:00hours</td>
            <td>k60</td>
          </tr>

          <tr>
            <td>MAZABUKA</td>
            <td>KASAMA</td>
            <td>15:00hours</td>
            <td>K150</td>
          </tr>

          <tr>
            <td>KABWE</td>
            <td>MONZE</td>
            <td>15:00hours</td>
            <td>K150</td>
          </tr>
          <tr>
            <td>kITWE</td>
            <td>NDOLA</td>
            <td>07.00hours</td>
            <td>K90</td>
          </tr>
        </tbody>
      </Table>
     </div>
         <div>
           <Footer/>
         </div>
      </div>
    );
  }
}
