import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
      <section className='about mt-5'>
        <div className="container">
          <div className="row">
            <div className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h2 className='fw-bolder text-white'>ABOUT COMPONENT</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <div className="line bg-white me-2"></div>
                <i class="fa-solid text-white my-1 fa-star"></i>
                <div className="line bg-white ms-2"></div>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-2 mb-5'>
                <div>
                  <p className='text-white me-1'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div>
                  <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
