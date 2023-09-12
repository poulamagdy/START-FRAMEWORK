import React from 'react'
import img1 from '../image/poert1.png'
import img2 from '../image/port2.png'
import img3 from '../image/port3.png'
import './Por.css'

export default function Portfolio() {
  return (
    <>
      <section className='portfolio'>
        <div className="container">
          <div className="row gy-5 my-5">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='fw-bolder'>PORTFOLIO COMPONENT</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <div className="line bg-black me-2"></div>
                <i class="fa-solid text-black my-1 fa-star"></i>
                <div className="line bg-black ms-2"></div>
              </div>
            </div>
            <div className="col-md-4 porimg position-relative">
              <img src={img1} className='w-100 rounded-2' alt="" />
              <div className='position-absolute text-center rounded-2 capimg'>
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 porimg position-relative">
              <img src={img2} className='w-100 rounded-2' alt="" />
              <div className='position-absolute text-center rounded-2 capimg'>
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 porimg position-relative">
              <img src={img3} className='w-100 rounded-2' alt="" />
              <div className='position-absolute text-center rounded-2 capimg'>
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 porimg position-relative">
              <img src={img1} className='w-100 rounded-2' alt="" />
              <div className='position-absolute text-center rounded-2 capimg'>
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 porimg position-relative">
              <img src={img2} className='w-100 rounded-2' alt="" />
              <div className='position-absolute text-center rounded-2 capimg'>
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 porimg position-relative">
              <img src={img3} className='w-100 rounded-2' alt="" />
              <div className='position-absolute text-center rounded-2 capimg'>
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
