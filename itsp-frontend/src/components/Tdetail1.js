import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar'


function Tdetail1 () {
  return(
    <div>
        <NavBar></NavBar>
        <div className="start">
        <Container p-3>
          Team Members:
        <table class="table" id="tabletext">
        <tr class="table-primary">
       <th>Aman </th>
       <th>Adit </th>
       <th>Akarsh</th>
       <th>Divy</th>
    </tr>
    </table>
    </Container>
      </div>
  </div>


  );
}
export default Tdetail1 ;

