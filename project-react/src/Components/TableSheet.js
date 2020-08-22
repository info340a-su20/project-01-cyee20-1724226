import React, { Component } from "react";
import "../style.css";

class TableSheet extends Component {
  render() {
    return (
      <div>
        <div>
          <table>
            <h2>Food</h2>
            <tr>
              <th>Company</th>
              <th>Address</th>
              <th>Number</th>
            </tr>
            <tr>
              <td>Rainier Valley Food Bank</td>
              <td>4205 Rainier Ave S, Seattle, WA 98118</td>
              <td>(206) 723-4105</td>
            </tr>
            <tr>
              <td>Byrd Barr Place Food Bank</td>
              <td>722 18th Ave, Seattle, WA 98122</td>
              <td>(206) 812-4970</td>
            </tr>
            <tr>
              <td>Pike Market Food Bank</td>
              <td>1531 Western Ave P, Seattle, WA 98101</td>
              <td>(206) 626-6462</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
            <h2>Shelter</h2>
            <tr>
              <th>Company</th>
              <th>Address</th>
              <th>Number</th>
            </tr>
            <tr>
              <td>Compass Blaine Center Emergency Shelter</td>
              <td>150 Denny Way, Seattle, WA 98109</td>
              <td>(206) 474-1000</td>
            </tr>
            <tr>
              <td>Roots Young Adult Shelter</td>
              <td>1415 NE 43rd St, Seattle, WA 98105</td>
              <td>(206) 632-1635</td>
            </tr>
            <tr>
              <td>Sacred Heart Shelter</td>
              <td>232 Warren Ave N, Seattle, WA 98109</td>
              <td>(206) 285-7489</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
            <h2>Health</h2>
            <tr>
              <th>Company</th>
              <th>Address</th>
              <th>Number</th>
            </tr>
            <tr>
              <td>MultiCare Indigo Urgent Care - Rainier Avenue</td>
              <td>3820 Rainier Ave S suite l, Seattle, WA 98118</td>
              <td>(206) 731-7500</td>
            </tr>
            <tr>
              <td>Kaiser Permanente - Urgent Care</td>
              <td>1501 E Thomas St, Seattle, WA 98112</td>
              <td>(206) 326-3223</td>
            </tr>
            <tr>
              <td>Concentra Urgent Care</td>
              <td>3223 1st Ave S Suite C, Seattle, WA 98134</td>
              <td>(206) 624-3651</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default TableSheet;
