import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import Button from 'react-bootstrap/Button'
const Tablecontent = ({data,addEmp,editEmp,delteEmplo,allDelete, removItem , deleteEmploy}) => {

  return (
    <section>
    <Row className="firstrow">
      <Col sm={8} className='title'>{<h1>Manage Employees</h1>}</Col>
      <Col sm={1} className='delete'><Button variant='danger' onClick={allDelete}>Delete</Button></Col>
      <Col sm={3} className='sucess'><Button variant='success' onClick={addEmp}><i class="fa-solid fa-plus plus"></i>{" "}Add NewEmploy</Button></Col>
    </Row>
      <Table hover className='tabledimension'>
  <thead>
    <tr>
      <th scope="col">  <Form.Check aria-label="option 1" /></th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((eachobj)=>{
      return(
        <tr>
        <td>  <Form.Check aria-label="option 1"  onChange={()=>{ removItem(eachobj)}}/></td>
        <td>{eachobj.name}</td>
        <td>{eachobj.email}</td>
        <td>{eachobj.address}</td>
        <td>{eachobj.phone}</td>
        <td>{}
          <a href='#' onClick={()=>{editEmp(eachobj)}}><i class="fa-solid fa-pencil pen"></i></a>  
          <a href='#' onClick ={() =>{delteEmplo(eachobj)}}> <i class="fa-solid fa-trash trash"></i></a>
        </td>
      </tr>
      )
    })}
  </tbody> 
</Table>
<p>Showing <b><span>{data.length} </span></b> out of <span>25</span> entries</p>
    </section>
  )

}

export default Tablecontent


