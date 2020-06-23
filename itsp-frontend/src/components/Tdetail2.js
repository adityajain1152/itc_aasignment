import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar'


function Tdetail2 () {
  return(
    <div>
    <NavBar></NavBar>
    <div className="start">
    <Container p-3>
      Team Members:
    <table class="table" id="tabletext">
    <tr class="table-primary">
   <th>Aditya </th>
   <th>Ankur </th>
   <th>Hemaksh</th>
   <th>Tarun</th>
</tr>
</table>
</Container>
  </div>
</div>

  );
}
export default Tdetail2 ;

