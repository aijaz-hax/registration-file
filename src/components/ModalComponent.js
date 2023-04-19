import React from 'react'
import { Modal } from 'react-bootstrap'
import "../index.css"
const ModalComponent = ({open,setOpen,data}) => {
    console.log("Data",data)
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <Modal show={open} onHide={handleClose} className='modalStyle'>
      <Modal.Body>
        <div className='modalBodyStyle'>
        <div className='contentDiv'>
        <p className='commonStyle' style={{color:"white"}}>Name:</p>
        <p style={{color:"white"}}>{data.name}</p>
        </div>
        <div className='contentDiv'>
        <p className='commonStyle' style={{color:"white"}}>Email:</p>
        <p style={{color:"white"}}>{data.email}</p>
        </div>
        <div className='contentDiv'>
        <p className='commonStyle' style={{color:"white"}}>DOB:</p>
        <p style={{color:"white"}}>{data.dob}</p>
        </div>
        <div className='contentDiv'>
        <p className='commonStyle' style={{color:"white"}}>Address:</p>
        <p style={{color:"white"}}>{data.address}</p>
        </div>
        <div className='contentDiv'>
        <p className='commonStyle' style={{color:"white"}}>Image:</p>
        <p style={{color:"white"}}><img src= {data.image} style={{height:"30px",width:"30px",borderRadius:"50%"}}/></p>
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
       <div className='contentDiv'  style={{paddingLeft:"15px"}}>
        <button style={{height:"26px",width:"60px",cursor:"pointer"}} onClick={()=>setOpen(false)}>Close</button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent