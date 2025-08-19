import React, { useState } from 'react'

export default function Contact() {
const [isfoucsename,setfoucsename]=useState(0)
const [isfoucseage,setfoucseage]=useState(0)
const [isfoucsepass,setfoucsepass]=useState(0)
const [isfoucseemail,setfoucseemail]=useState(0)

  
  return (
    <>
    <div className=' container'>
<div className="row d-flex flex-column justify-content-center align-items-center home">
   <div className="col-md-12 text-center mt-3">
<h1 className="fw-bolder mb-0">Get in Touch</h1>

              <p className=" text-center mt-0">
                <span className=" fw-bold fs-1">______</span>
                <i class="fa-solid fa-star ms-1 me-1"></i>
                <span className=" fw-bold fs-1">______</span>
              </p>
            </div>
<div className='col-md-8'>
<span className={`${isfoucsename ? "show" : ""} head-input text-success`}>User Name</span>
<input type="text" onInput={()=>{setfoucsename(true)}} onBlur={()=>{setfoucsename(false)}} className=' mb-5 form-control border border-top-0 border-end-0 border-start-0' placeholder='UserName' />
</div>
<div className='col-md-8'>
<span className={`${isfoucseage ? "show" : ""} head-input text-success`}>User Age</span>
<input type="text" onInput={()=>{setfoucseage(true)}} onBlur={()=>{setfoucseage(false)}} className=' mb-5 form-control border border-top-0 border-end-0 border-start-0' placeholder='UserAge' />
</div>
<div className='col-md-8'>
<span className={`${isfoucseemail ? "show" : ""} head-input text-success`}>User Password</span>
<input type="text" onInput={()=>{setfoucseemail(true)}} onBlur={()=>{setfoucseemail(false)}} className=' mb-5 form-control border border-top-0 border-end-0 border-start-0' placeholder='UserEmail' />
</div>
<div className='col-md-8 '>
<span className={`${isfoucsepass ? "show" : ""} head-input text-success`}>User Email</span>
<input type="text" onInput={()=>{setfoucsepass(true)}} onBlur={()=>{setfoucsepass(false)}} className=' mb-5 form-control border border-top-0 border-end-0 border-start-0' placeholder='UserPass' />
</div>
<div className='col-md-8'>
  <button className=' btn btn-success'>Send Message</button>
</div>


</div>


    </div>
    
    </>
  )
}
