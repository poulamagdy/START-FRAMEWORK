import React from 'react'
import './Conatct.css'
export default function Conatct() {
  return (
    <>
      <section className='conatct'>
        <div className="container">
          <div className="row">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='fw-bolder'>CONATCT SECTION</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <div className="line bg-black me-2"></div>
                <i class="fa-solid text-black my-1 fa-star"></i>
                <div className="line bg-black ms-2"></div>
              </div>
              <input type="text" className='w-75 border-0 my-4' placeholder='userName' />
              <input type='text' className='w-75 border-0 my-4' placeholder='userAge' />
              <input type="email" className='w-75 border-0 my-4' placeholder='userEmail' />
              <input type="password" className='w-75 border-0 my-4' placeholder='userPassword' />
              <button className='btn send text-white mb-5'>send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
