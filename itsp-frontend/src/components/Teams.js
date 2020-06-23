import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar'

function Team(){
    return(
        <div>
        <NavBar></NavBar>
        <div className="start">
            <Container p-3>
            <table class="table" id="tabletext">
             <tr class="table-primary">
             <th>ITSP Team Name</th>
             </tr>
             <tr class="table-success">
            <td>
            <a href="./Tdetail1">Deadly Sins</a>
             </td>
             </tr>
             <tr class="table-success">
            <td>
            <a href="./Tdetail2">Visibles</a>
             </td>
             </tr>
             <tr class="table-success">
            <td>
            <a href="./Tdetail3">MAST</a>
             </td>
             </tr>
             <tr class="table-success">
            <td>
            <a href="./Tdetail4">The Last 3 Brain Cells</a> 
             </td>
             </tr>             
            </table>
            </Container>
        </div>
        </div>
    );
}


export default Team;
