import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar'


function Tdetail3 () {
  return(
    <div>
    <NavBar></NavBar>
    <div className="start">
    <Container p-3>
      Team Members:
    <table class="table" id="tabletext">
    <tr class="table-primary">
   <th>Vedant </th>
   <th>Harshit </th>
   <th>Ankit</th>
   <th>Aniket</th>
</tr>
</table>
</Container>
  </div>
</div>

  );
}
export default Tdetail3 ;

