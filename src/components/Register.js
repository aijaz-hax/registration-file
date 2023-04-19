import React, { useState } from 'react'
import "../index.css"
import InputField from './InputField'
import ModalComponent from './ModalComponent'
const Register = () => {
    const [name,setName] = useState("")
    const [value,setValue] = useState("mr")
    const [checked,setChecked] = useState("male")
    const [date,setDate] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [singleVal,setSingleVal] = useState({})
    const [open,setOpen] = useState(false)
    const [arr,setArr] = useState([])
    const insertData=()=>{
       const data={
        id: new Date().getTime(),
        name:name,
        email:email,
        dob:date,
        address:address,
        image:URL.createObjectURL(images)
       }
       setArr([...arr,data])
       alert("Data Inserted Successfully");
       setName("")
       setValue("mr")
       setChecked("male")
       setImages()
       setDate("")
       setEmail("")
       setAddress("")

    }
    const [images,setImages] = useState()
    const handleNameChange=(val)=>{
      setName(val)
    }
    const selectHandle=(e)=>{
        setValue(e.target.value)
    }
    const handleEmailChange=(val)=>{
        setEmail(val)
        }
    const handleDateChange=(e)=>{
        setDate(e.target.value)
    }
    const handleAddressChange=(val)=>{
       setAddress(val)
    }
    const onChangeImage=(e)=>{
        setImages(e.target.files[0])
        }
    const handleClose=()=>{
        setOpen(false)
    }
        console.log("Email",email,"Name",name,"dob",date)
  return (
    <>
    <div className='mainDiv'>
       <div className='contentDiv'>
          <p className='commonStyle'>Name</p>
          <p className='commonStyle' style={{paddingLeft:"24px"}}>Title</p>
          <select value={value} onChange={selectHandle} className='selectStyle'>
             <option value="mr">Mr</option>
             <option value="mrs">Mrs</option>
             <option value="other">Other</option>
          </select>
          <InputField type="text" value={name} placeholder="Enter Name" onChange={handleNameChange}/>
       </div>
       <div className='contentDiv'>
       <p className='commonStyle'>Gender</p>
       <label style={{paddingLeft:"18px"}}><input type="radio" checked={checked==="male"} onClick={()=>setChecked("male")}/>Male</label>
       <label><input type="radio" checked={checked==="female"} onClick={()=>setChecked("female")}/>Female</label>
       </div>
       <div className='contentDiv'>
       <p className='commonStyle'>Email</p>
       <p style={{paddingLeft:"24px"}}>
       <InputField type="text" value={email} placeholder="Enter Email" onChange={handleEmailChange} width="20vw"/>
       </p>
       </div>
       <div className='contentDiv'>
       <p className='commonStyle'>DOB</p>
       <p style={{paddingLeft:"24px"}}>
       <input type="date" className='dateStyle' onChange={handleDateChange}/>
       </p>
       </div>
       <div className='contentDiv'>
       <p className='addStyle'>Permanent Address</p>
       </div>
       <div className='contentDiv'>
       <p className='commonStyle'>Address</p>
       <p style={{paddingLeft:"24px"}}>
       <InputField type="textarea" value={address} onChange={handleAddressChange} width="62vw" height="60px"/>
       </p>
       </div>
       <div className='contentDiv'>
       <p className='addStyle'>Upload your Photo</p>
       <input type="file"  onChange={onChangeImage}/>
       </div>
       <div className='footerStyle'>
        <button className='buttonStyle' onClick={insertData}>
            Insert
        </button>
       </div>
    </div>
    <div className='tableMainDiv'>
        <table>
            <tr className='myRow'>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Photo</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
            </tr>
            {
               arr.map((item,key)=>{
                  return(
                    <tr key={key}>
                       <td>{item?.name}</td>
                       <td>{item?.email}</td>
                       <td>{item?.dob}</td>
                       <td><img src= {item?.image} style={{height:"25px",width:"25px",borderRadius:"50px"}}/></td>
                       <td style={{fontWeight:"500",cursor:"pointer"}} onClick={()=>{setOpen(true);setSingleVal(item) }}>View</td>
                       <td><button style={{height:"24px",width:"60px",borderRadius:"4px"}}>Edit</button></td>
                       <td><button style={{height:"24px",width:"60px",borderRadius:"4px"}}>Delete</button></td>
                    </tr>
                  )
               }) 
            }
        </table>
    </div>
    {
        open && 
        (
            <ModalComponent
                open={open}
                setOpen={setOpen}
                data={singleVal}
            />
        )
    }
    </>
  )
}

export default Register