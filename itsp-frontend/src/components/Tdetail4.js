import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar'


function Tdetail4 () {
  return(
    <div>
    <NavBar></NavBar>
    <div className="start">
    <Container p-3>
      Team Members:
    <table class="table" id="tabletext">
    <tr class="table-primary">
   <th>Kushal</th>
   <th>Lokesh </th>
   <th>Utkarsh</th>
   <th>Ajitesh</th>
</tr>
</table>
</Container>
  </div>
</div>

  );
}
export default Tdetail4 ;

