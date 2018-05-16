import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import Posts from '/imports/api/blog/collections.js';

 export  default class Home  extends Component {
  render() {
    return (
<div>
<table>
    <tr>
      <th className='table'> From</th>
      <th className='table'>To</th>
      <th className='table'>Departure Time</th>
      <th className='table'>Arrival Time</th>
      <th className='table'>Fares</th>
    </tr>

  <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>

    <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>

    <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>

    <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>

      <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>

    <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>

    <tr>
      <td>Kitwe</td>
      <td>Chipata</td>
      <td>06:00hrs</td>
      <td>11:00hrs</td>
      <td>K500</td>
    </tr>
</table>
</div>

    )
  }
}
