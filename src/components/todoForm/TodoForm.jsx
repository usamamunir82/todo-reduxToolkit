import React, { useEffect } from 'react'
import { useState } from 'react'
import './todoform.css'
import { useDispatch } from 'react-redux'
import {addTodo} from '../../redux/reducers/todoReducer/todoSlice'
import {updateTodo} from '../../redux/reducers/todoReducer/todoSlice'

import { RiContrastDropLine } from 'react-icons/ri'
function TodoForm({updatedData , setupdatedData}) {
 
  const dispatch =useDispatch()
  const [value,setValue]=useState({
    firstName:"",
    lastName:"",
    email:"",
  })
console.log(value)

  const handleChange=(evt)=>{
    setValue({
      ...value,
      [evt.target.name]:evt.target.value
    })

  }

  


  useEffect(() => {
    console.log(updatedData);
   
    setValue({
      firstName: updatedData?.firstName,
      lastName:updatedData?.lastName,
      email:updatedData?.email
    })
  }, [updatedData])
  

  const onSubmit=()=>{
    dispatch(
      addTodo({
        firstName:value.firstName,
        lastName:value.lastName ,
        email:value.email 

      },)
    )
    setValue({firstName:'',lastName:'',email:''})
    

  }
 
  console.log(updatedData?.id)

  const handelUpdate  = ()=>{
    dispatch(
      updateTodo({
        firstName:value.firstName ,
        lastName:value.lastName ,
        email:value.email ,

        id:updatedData?.id
      },setValue({firstName:'',lastName:'',email:''}))
      
    )
    setupdatedData(null)

  }

  return (
    <div className='container'>
      {/* <form onSubmit={onSubmit}> */}
     
      {/* {isShown&& ( */}
        <div className='formContainer'>
            <label>
                Add Your Todo
            </label>
            <div className='formInput'>
            <input value={value.firstName} name="firstName" onChange={handleChange} placeholder='Enter Your First Name'/>
            </div>
            <div className='formInput'>
            <input value={value.lastName} name="lastName" onChange={handleChange} placeholder='Enter your last Name'/>
            </div>
             <div className='formInput'>
            <input value={value.email} name="email" onChange={handleChange} placeholder='Enter Your email'/>
            </div>
            <div className='formButon'>
            <button  onClick={()=> updatedData ? handelUpdate() : onSubmit()}> {updatedData ? "Update" : "Submit"}</button>
            </div>

        </div>
        {/* )} */}
       
        {/* </form> */}

    </div>
  )
}

export default TodoForm