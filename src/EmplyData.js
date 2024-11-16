import React, { useState } from 'react';
import TableData from './TableData';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const customerData = [{
    name:"narasimha",
    email:"narasimha235@gmail.com",
    address:"gopavaram villege ",
    phone:9581702145,
  
},
{
    name:"venkata subbaiah",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
{
    name:"sunil",
    email:"sunil562@gmail.com",
    address:"chenai",
    phone:8844997755
},
{
    name:"venkata Ram",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
{
    name:"venkata kalyan",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
{
    name:"venkata subbaiah",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
];


const EmplyData = () => {

const [ empJson, setEmployJson ] = useState(customerData);
//edit useState
const [ action, setAction ] = useState();


// add employ usestate
const [show1 , setShow1] = useState(false)

const [showMe , setShowme] = useState(false)

const [address , setAddress] = useState({
name:"",
email:"",
address:"",
phone:"",
})

// model

const handleClose = () =>{
    setShow1(false)
}
// add employfunction popup
const addEmploy =()=>{
  setShow1(true);
  setAction("add");

}
// handleChangeFunction  

const handleChangeInput =(event) =>{
const newAddress =  JSON.parse(JSON.stringify(address));
newAddress[event.target.name] = event.target.value;

setAddress(newAddress)


}
// data passes to newAddress
const addNewEmploy = ()=>{
 const newEmp = empJson;

 const findEmploy = empJson.find((emp)=>{
  return emp.email === address.email 
  
 }) 
 if(!findEmploy){
  newEmp.push(address)
  setEmployJson(newEmp)
  setShow1(false) 
 }else{
  console.log("record not found")
 }

}

// edit option function reusable model ------>
const editEmploy =(employ) =>{
setShow1(true);
setAction("edit");
setAddress(employ);

}

const editNewEmploy = ()=>{
  const findRecord = empJson.findIndex(item => item.email === address.email);
 if(findRecord !==-1){
  empJson[findRecord] = address;
  setEmployJson(empJson)
  setShow1(false)
 }

};
const handleClos = () =>{
  setShowme(false)
}
const deleteEmp= (deleteitem) =>{
setShowme(true)
setAddress(deleteitem)
}
const deleteEmploy =() =>{

const deletingNumber = empJson.findIndex(item => item.email === address.email);
if(deletingNumber !== -1){
  empJson.splice(deletingNumber,1);
  setShowme(false)
setEmployJson(empJson)
}
};
const countingDelte = () =>{
  setShowme(true)
}
const removeItem =(remData)=>{
console.log(remData)

}



 return(
    <div>
        <TableData data={empJson} addEmp={addEmploy} editEmp={editEmploy} delteEmplo={deleteEmp} allDelete={countingDelte} removItem ={removeItem}/>
  
        <Modal
        show={show1}
        onHide={handleClos}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{action === "edit" ? "Edit Employe" : "Add Employ"}</Modal.Title>

        </Modal.Header>
        <Modal.Body>
       <Form>
       <Form.Group className='mb-3' in>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='name' value={address.name}  onChange={handleChangeInput}></Form.Control>
       </Form.Group>
       <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email'  name='email' value={address.email} onChange={handleChangeInput} ></Form.Control>
       </Form.Group>
       <Form.Group className='mb-3'>
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3}  name='address' value={address.address}  onChange={handleChangeInput}/>
       </Form.Group>
       <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type='number'  name='phone' value={address.phone} onChange={handleChangeInput}></Form.Control>
       </Form.Group>
       </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={action ==="edit" ? editNewEmploy : addNewEmploy} > {action === "edit" ? "Update"  : "Add"}</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showMe}
        onHide={handleClos}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are You Sure You Want To Delete this record ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClos}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteEmploy}>Delete</Button>
        </Modal.Footer>
      </Modal>

    </div>
 )
}

export default EmplyData;