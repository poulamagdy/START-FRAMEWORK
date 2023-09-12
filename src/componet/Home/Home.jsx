import React from 'react'
import image1 from '../../avataaars.svg'
import './Home.css'
export default function Home() {
  return (
    <>
      <header className='mt-5'>
        <div className='container'>
          <div className="row">
            <div className="home d-flex flex-column justify-content-center align-items-center my-5">
              <img src={image1} className='mt-5' alt="" />
              <h2 className='text-white mt-5 text-uppercase fw-bolder'>START FRAMEWORK</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <div className="line bg-white me-2"></div>
                <i class="fa-solid text-white my-1 fa-star"></i>
                <div className="line bg-white ms-2"></div>
              </div>
              <div className='text-white mt-3 mb-5'>Graphic Artist - Web Designer - Illustrator</div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
